const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressGraphql = require('express-graphql');
const cookieParser = require('cookie-parser')
const jwt = require('jwt-express');

require('../secrets');

const { schema, resolverMap } = require('./graphql');
const PORT = process.env.PORT || 8080;
const app = express();

// Morgan logging can get annoying when running tests.
// Only turn on logging when not running tests.
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up authentication / authorization with JWTs. Make sure
// you have a secrets.js file at the root of this project.
app.use(cookieParser(process.env.jwtSecret || 'super secret'))
app.use(jwt.init(process.env.jwtSecret || 'super secret'));

app.use('/graphql', expressGraphql({
  schema,
  rootValue : resolverMap,
  pretty : true,
  graphiql : true,
}));

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

if (require.main === module) {
  app.listen(PORT, () => console.log(`Waiting for requests on port ${PORT}`));
}

module.exports = app;
