const { userIsAdmin } = require('../utils');

module.exports = {
  allTodoLists: (_, __, { req, res, models: { TodoList } }) => {
    userIsAdmin(req, res);
    return TodoList.findAll();
  },
  todoListById: (_, { id }, { req, res, models: { TodoList } }) => {
    userIsAdmin(req, res);
    return TodoList.findById(id)
  },
}
