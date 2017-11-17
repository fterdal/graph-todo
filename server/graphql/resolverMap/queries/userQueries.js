const { mockUsers } = require('../mocks');

const userResolvers = {
  userById: ({ id }) => {
    return mockUsers.find(user => {
      return user.id === id;
    });
  },
  allUsers: () => {
    return mockUsers
  },
}

module.exports = userResolvers;
