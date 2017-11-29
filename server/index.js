const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressGraphql = require('express-graphql');
const passport = require('passport');

if (process.env.NODE_ENV !== 'production') require('../secrets');

const { schema, resolverMap } = require('./graphql');
const PORT = process.env.PORT || 8080;
const app = express();

// Morgan logging can get annoying when running tests.
// Only turn on logging when not running tests.
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

const { user } = require('./graphql/resolverMap/mocks');

// passport registration
passport.serializeUser(({ id }, done) => done(null, id))
passport.deserializeUser((id) => user({id}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the GraphQL endpoint at /graphql.
// Allow GraphiQL unless its deployed in production
app.use('/graphql', expressGraphql({
  schema,
  rootValue : resolverMap,
  pretty : true,
  graphiql : process.env.NODE_ENV !== 'production',
}));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

if (require.main === module) {
  app.listen(PORT, () => console.log(`Waiting for requests on port ${PORT}`));
}

module.exports = app;
