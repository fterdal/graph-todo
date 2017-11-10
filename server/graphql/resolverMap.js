const mockTodoTasks = require('./mocks');

const resolverMap = {
  TodoTaskById: ({ id }) => {
    return mockTodoTasks.find(task => {
      return task.id === id;
    })
  },
  AllTodoTasks: () => {
    return mockTodoTasks
  }
};

module.exports = resolverMap;
