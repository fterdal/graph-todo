const { isAdmin } = require('../utils');

module.exports = {
  allTodoTasks: (_, __, { req, res, models: { TodoTask } }) => {
    isAdmin(req, res);
    return TodoTask.findAll();
  },
  todoTaskById: (_, { id }, { req, res, models: { TodoTask } }) => {
    isAdmin(req, res);
    return TodoTask.findById(id)
  },
}
