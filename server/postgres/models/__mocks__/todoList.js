/* eslint-env jest */
const { todoList } = require('./mockData');

const TodoList = {
  findById: jest.fn(id => {
    if (id === todoList.id) return todoList;
  }),
  create: jest.fn(() => {
    return todoList;
  })
}

module.exports = TodoList;
