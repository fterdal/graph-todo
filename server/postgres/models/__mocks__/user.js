/* eslint-env jest */
const { user } = require('./mockData').reset();

const User = {
  findById: jest.fn(id => {
    if (id === user.id) return user;
  }),
  // create: jest.fn(() => {
  //   return todoList;
  // })
}

module.exports = User;
