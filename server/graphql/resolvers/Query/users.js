const { userIsAdmin } = require('../utils');

module.exports = {
  allUsers: (_, __, { req, res, models: { User } }) => {
    userIsAdmin(req, res);
    return User.findAll();
  },
  userById: (_, { id }, { req, res, models: { User } }) => {
    userIsAdmin(req, res);
    return User.findById(id);
  },
}
