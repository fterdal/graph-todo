const { mockTodoTasks } = require('../mocks');

const todoTaskResolvers = {
  TodoTaskById: ({ id }) => {
    return mockTodoTasks.find(task => {
      return task.id === id;
    })
  },
  AllTodoTasks: () => {
    return mockTodoTasks
  },
}

module.exports = todoTaskResolvers;
