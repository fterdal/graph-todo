const { readFileSync } = require('fs');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = readFileSync('./server/graphql/schema.graphql', 'utf-8');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema;
