const {
  user,
  listUsers,
} = require('../mocks');

module.exports = {
  userById: ({ id }) => user({ id }),
  allUsers: () => listUsers(),
}
