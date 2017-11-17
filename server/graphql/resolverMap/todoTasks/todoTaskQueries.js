const {
  addTodoTask,
  todoTaskById,
  listTodoTasks,
} = require('../mocks');
require('../mockSeed');
const todoTaskResolvers = {
  todoTaskById: ({ id }) => todoTaskById({ id }),
  allTodoTasks: () => listTodoTasks(),
}

module.exports = todoTaskResolvers;
