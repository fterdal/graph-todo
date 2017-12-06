const { isAdmin } = require('../utils');

module.exports = {
  allTodoLists: (_, __, { req, res, models: { TodoList } }) => {
    isAdmin(req, res);
    return TodoList.findAll();
  },
  todoListById: (_, { id }, { req, res, models: { TodoList } }) => {
    isAdmin(req, res);
    return TodoList.findById(id)
  },
}
