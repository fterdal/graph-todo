const {
  todoTask,
  listTodoTasks,
} = require('../mocks');

module.exports = {
  todoTaskById: ({ id }) => todoTask({ id }),
  allTodoTasks: () => listTodoTasks(),
}
