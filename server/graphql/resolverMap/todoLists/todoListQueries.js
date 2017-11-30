const {
  todoList,
  listTodoLists,
} = require('../mocks');

module.exports = {
  todoListById: ({ id }) => todoList({id: id}),
  allTodoLists: () => listTodoLists(),
}
