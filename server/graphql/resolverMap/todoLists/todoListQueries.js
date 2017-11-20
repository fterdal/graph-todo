const {
  todoList,
  listTodoLists,
} = require('../mocks');

const todoListResolvers = {
  todoListById: ({ id }) => todoList({id: id}),
  allTodoLists: () => listTodoLists(),
}

module.exports = todoListResolvers;
