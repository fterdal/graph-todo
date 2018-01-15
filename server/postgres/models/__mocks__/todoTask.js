/* eslint-env jest */
const { todoTasks } = require('./mockData');

const TodoList = {
  findById: jest.fn(id => {
    if (id === todoList.id) return todoList;
  }),
  create: jest.fn(({ title, text}) => {
    return todoTasks.find(el => el.title === title);
  })
}

module.exports = TodoList;
