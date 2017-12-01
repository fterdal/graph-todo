const fs = require('fs');
const { buildSchema } = require('graphql');

const schemaTxt = fs.readFileSync('./server/graphql/schema.graphql', 'utf-8');
const resolverMap = require('./resolverMap');

const schema = buildSchema(schemaTxt);
// console.log('~~~~ SCHEMA ===>', schema);
// console.log('~~~~ resolverMap ===>', resolverMap);

module.exports = { schema, resolverMap };
