const fs = require('fs');
const { makeExecutableSchema } = require('graphql-tools');

// const schemaTxt = fs.readFileSync('./server/graphql/schema.graphql', 'utf-8');
// const resolverMap = require('./resolverMap');

const typeDefs = fs.readFileSync('./server/graphql/schema.graphql', 'utf-8');
const resolvers = require('./resolvers');

// const schema = buildSchema(schemaTxt);
const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
})

// console.log('~~~~ SCHEMA ===>', schema);
// console.log('~~~~ resolverMap ===>', resolverMap);

module.exports = schema;
