const {
  todoTask,
  listTodoTasks,
} = require('../mocks');

const todoTaskResolvers = {
  todoTaskById: ({ id }) => todoTask({ id }),
  allTodoTasks: () => listTodoTasks(),
}

module.exports = todoTaskResolvers;
