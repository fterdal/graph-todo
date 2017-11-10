const mockTodoTasks = require('./mocks');

const resolverMap = {
  TodoTaskById: ({ id }) => {
    return mockTodoTasks.find(task => {
      return task.id === id;
    })
  },
  AllTodoTasks: () => {
    return [
      {
        id: 1,
        title: 'groceries',
        text: 'get milk, eggs, and bear traps',
        completed: false,
      },
      {
        id: 2,
        title: 'clothes shopping',
        text: 'get some new pants and socks',
        completed: false,
      },
      {
        id: 3,
        title: 'letter to grandma',
        text: "remember to mention grandpa's upcoming birthday",
        completed: true,
      },
    ]
  }
};

module.exports = resolverMap;
