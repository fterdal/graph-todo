const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressGraphql = require('express-graphql');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const postgres = require('./postgres');

const sessionStore = new SequelizeStore({ db: postgres });
const { schema, resolverMap } = require('./graphql');
const PORT = process.env.PORT || 8080;
const app = express();

const notProduction = process.env.NODE_ENV !== 'production';
if (notProduction) require('../secrets');

// passport registration
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  console.log('~~~~ DESERIALIZING USER ~~~');
  return postgres.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done)
});

// passport.deserializeUser((id, done) =>
//   postgres.models.user.findById(id)
//     .then(user => done(null, user))
//     .catch(done))


const createApp = () => {

  // Use Logging
  app.use(morgan('dev'));

  // Parse request bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Initialize passport with the session (defined above)
  app.use(session({
    secret: process.env.SESSION_SECRET || 'super secret shhhhhhh...',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Set up the GraphQL endpoint at /graphql.
  // Allow GraphiQL unless its deployed in production
  app.use('/graphql', expressGraphql({
    schema,
    rootValue : resolverMap,
    pretty : true,
    graphiql : notProduction,
  }));

  app.get('/requser', (req, res, next) => {
    console.log(req.user);
    res.status(200).send(req.user);
  });

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })
}

if (require.main === module) {
  sessionStore.sync()
    .then(() => postgres.sync({ force: false}) ) // Change to notProduction eventually
    .then(createApp)
    .then(() => {
      // Start Listening on specified port:
      app.listen(PORT, () => console.log(`Waiting for requests on port ${PORT}`));
    })
} else {
  createApp();
}

module.exports = app;
