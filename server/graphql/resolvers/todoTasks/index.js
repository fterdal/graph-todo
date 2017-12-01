const TodoTask = require('../../../postgres/models/todoTask');

module.exports = {
  allTodoTasks: () => TodoTask.findAll(),
  todoTaskById: (_, { id }) => TodoTask.findById(id),
}
