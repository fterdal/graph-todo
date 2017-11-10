const { mockUsers } = require('./mocks');

const userResolvers = {
  UserById: ({ id }) => {
    return mockUsers.find(user => {
      return user.id === id;
    })
  },
  AllUsers: () => {
    return mockUsers
  },
}

module.exports = userResolvers;
