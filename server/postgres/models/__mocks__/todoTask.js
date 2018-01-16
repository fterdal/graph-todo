/* eslint-env jest */
const { todoTasks } = require('./mockData').reset();

const TodoTask = {
  findById: jest.fn(id => {
    return todoTasks.find(el => el.id === id);
  }),
  create: jest.fn(({ title }) => {
    return todoTasks.find(el => el.title === title);
  }),
}

module.exports = TodoTask;
