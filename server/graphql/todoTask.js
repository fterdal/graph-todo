/* eslint key-spacing:0 */
const graphql = require('graphql');

const todoTaskType = new graphql.GraphQLObjectType({
  name : 'Todo Task',
  fields : {
    id : {
      type : graphql.GraphQLString
    },
    title : {
      type : graphql.GraphQLString
    },
    text : {
      type : graphql.GraphQLInt
    },
    completed : {
      type : graphql.GraphQLBoolean,
    }
  }
});

module.exports = {
  type : todoTaskType,
  args : {
    id : {
      type : graphql.GraphQLInt
    }
  },
  resolve : (root, args) => {
    return {
      id : '1',
      title : 'get groceries',
      text : 'pick up eggs, milk, and bear traps',
      completed : false,
    };
  }
};
