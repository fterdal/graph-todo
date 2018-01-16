/* eslint-env jest */

const data = {
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
    update: jest.fn( function({ name }) {
      return {...this, name }
    }),
  },
  todoTasks: [{
    id: 2,
    title: 'potions reading',
    text: 'chapter 4 on polymorph',
    completed: true,
  }, {
    id: 3,
    title: 'divination assignment',
    text: 'predict a celestial event (just ask hermione)',
  }],
  req: {
    user: {
      id: 7,
      isAdmin: false,
      canEditTodoList: jest.fn(() => true),
    },
    login: jest.fn(),
    logout: jest.fn(),
  },
  res: {
    status: jest.fn(),
  },
}

module.exports = {
  reset: () => {
    return data;
  },
}
