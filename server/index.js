const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressGraphql = require('express-graphql');

const rootSchema = require('./graphql/rootSchema');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/graphiql', expressGraphql({
  schema : rootSchema,
  pretty : true,
  graphiql : true
}));

app.get('/graphql', (req, res) => {
  const graphqlQuery = req.query.graphqlQuery;
  if (!graphqlQuery) {
    return res.status(500).send('You must provide a query');
  }

  return graphql(rootSchema, graphqlQuery)
    .then(response => response.data)
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
});

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => console.log(`Waiting for requests on port ${PORT}`));
