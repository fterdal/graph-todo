/* eslint key-spacing:0 */
const { buildSchema } = require('graphql');
const graphql = require('graphql');

const todoTaskType = new graphql.GraphQLObjectType({
  name : 'TodoTask',
  fields : {
    id : {
      type : graphql.GraphQLString
    },
    title : {
      type : graphql.GraphQLString
    },
    text : {
      type : graphql.GraphQLString
    },
    completed : {
      type : graphql.GraphQLBoolean,
    }
  }
});
const query = buildSchema(`
  type Query {
    TodoTasks: [TodoTask]
    TodoTaskById: TodoTask
  }
`);

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
