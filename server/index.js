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
passport.serializeUser(({ id }, done) => done(null, id));
passport.deserializeUser((id, done) => {
  return postgres.models.user.findById(id)
    .then(user => done(null, user))
    .catch(done)
});

const createApp = () => {

  // Use Logging
  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Set up the GraphQL endpoint at /graphql.
  // Allow GraphiQL unless its deployed in production
  app.use('/graphql', expressGraphql({
    schema,
    rootValue : resolverMap,
    pretty : true,
    graphiql : notProduction,
  }));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })
}

if (require.main === module) {
  sessionStore.sync()
    .then(() => postgres.sync({ force: notProduction}) )
    .then(createApp)
    .then(() => {
      // Start Listening on specified port:
      app.listen(PORT, () => console.log(`Waiting for requests on port ${PORT}`));
    })
} else {
  createApp();
}

module.exports = app;
