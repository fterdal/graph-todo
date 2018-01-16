/* eslint-env jest */
const { user } = require('./mockData').reset();

const User = {
  findById: jest.fn(id => {
    if (id === user.id) return user;
  }),
  findOne: jest.fn(({ where: { email } }) => {
    if (email === 'hermione@hogwarts.edu') return null;
    return user;
  }),
  create: jest.fn(({ email }) => {
    if (email === 'hagrid@hogwarts.edu') throw new Error('User Already Exists')
    return user;
  })
}

module.exports = User;
