/* eslint-env jest */

const mockTodoList = {
  id: 3,
  name: 'studying',
  description: 'do some reading, homework, etc',
  addTodoTask: jest.fn(),
  update: jest.fn(),
}

const TodoList = {
  findById: jest.fn(id => {
    if (id === mockTodoList.id) return mockTodoList;
  }),
}

module.exports = TodoList;
