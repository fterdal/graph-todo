const TodoList = require('../../../postgres/models/todoList');

module.exports = {
  allTodoLists: () => TodoList.findAll(),
  todoListById: (_, { id }) => TodoList.findById(id),
}
