const { isAdmin } = require('../utils');

module.exports = {
  allUsers: (_, __, { req, res, models: { User } }) => {
    isAdmin(req, res);
    return User.findAll();
  },
  userById: (_, { id }, { req, res, models: { User } }) => {
    isAdmin(req, res);
    return User.findById(id);
  },
}
