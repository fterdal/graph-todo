/* eslint-env jest */

module.exports = {
  user: {
    id: 7,
    email: 'harrypotter@hogwarts.edu',
    addTodoList: jest.fn(),
  },
  todoList: {
    id: 3,
    name: 'studying',
    description: 'do some reading, homework, etc',
    addTodoTask: jest.fn(),
  },
  todoTasks: [{
    title: 'potions reading',
    text: 'chapter 4 on polymorph',
    completed: true,
  }, {
    title: 'divination assignment',
    text: 'predict a celestial event (just ask hermione)',
  }],
  req: {
    user: {
      id: 7,
      isAdmin: true,
      canEditTodoList: jest.fn(() => true),
    }
  },
  res: {
    status: jest.fn(),
  },
}
