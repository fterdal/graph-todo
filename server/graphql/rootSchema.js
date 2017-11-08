'use strict';

const graphql = require('graphql');
const todoTaskType = require('./todoTask');

const schema = new graphql.GraphQLSchema({
  query : new graphql.GraphQLObjectType({
    name : 'Query',
    fields : {
      tasks : todoTaskType,
    }
  })
});

module.exports = schema;
