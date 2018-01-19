const { userIsAdmin, userCanEditTodoTask } = require('../utils');

module.exports = {
  allTodoTasks: (_, __, { req, res, models: { TodoTask } }) => {
    userIsAdmin(req, res);
    return TodoTask.findAll();
  },
  todoTaskById: (_, { id }, { req, res }) => {
    return userCanEditTodoTask(req, res, id);
  },
}
