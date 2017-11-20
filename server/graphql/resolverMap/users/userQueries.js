const {
  user,
  listUsers,
} = require('../mocks');

const userResolvers = {
  userById: ({ id }) => user({ id }),
  allUsers: () => listUsers(),
}

module.exports = userResolvers;
