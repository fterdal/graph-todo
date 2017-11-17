const {
  todoTaskById,
  listTodoTasks,
} = require('../mocks');

const todoTaskResolvers = {
  todoTaskById: ({ id }) => todoTaskById({ id }),
  allTodoTasks: () => listTodoTasks(),
}

module.exports = todoTaskResolvers;
