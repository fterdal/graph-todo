const TodoList = require('../../../postgres/models/todoList');

module.exports = {
  todoListById: ({ id }) => TodoList.findById(id),
  allTodoLists: () => TodoList.findAll(),
}
