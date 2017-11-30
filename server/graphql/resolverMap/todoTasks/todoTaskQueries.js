const TodoTask = require('../../../postgres/models/todoTask');

module.exports = {
  todoTaskById: ({ id }) => TodoTask.findById(id),
  allTodoTasks: () => TodoTask.findAll(),
}
