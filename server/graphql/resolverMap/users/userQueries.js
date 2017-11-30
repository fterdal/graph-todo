const User = require('../../../postgres/models/user');

module.exports = {
  userById: ({ id }) => User.findById(id),
  allUsers: () => User.findAll(),
}
