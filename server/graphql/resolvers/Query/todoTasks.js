const { userIsAdmin } = require('../utils');

module.exports = {
  allTodoTasks: (_, __, { req, res, models: { TodoTask } }) => {
    userIsAdmin(req, res);
    return TodoTask.findAll();
  },
  todoTaskById: (_, { id }, { req, res, models: { TodoTask } }) => {
    userIsAdmin(req, res);
    return TodoTask.findById(id)
  },
}
