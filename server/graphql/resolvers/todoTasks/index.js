const TodoTask = require('../../../postgres/models/todoTask');

module.exports = {
  allTodoTasks: () => {
    return TodoTask.findAll();
  },
  todoTaskById: (_, { id }) => {
    return TodoTask.findById(id);
  }
}
