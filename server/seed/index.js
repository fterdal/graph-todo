const { User } = require('../postgres/models');

const mockUsers = require('./mockUsers');

const seed = async () => {
  const users = await Promise.all(mockUsers.map(mockUser => User.create(mockUser)))
}

module.exports = seed;
