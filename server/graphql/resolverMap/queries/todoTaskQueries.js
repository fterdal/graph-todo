const { mockTodoTasks } = require('../mocks');

const todoTaskResolvers = {
  todoTaskById: ({ id }) => {
    return mockTodoTasks.find(task => {
      return task.id === id;
    })
  },
  allTodoTasks: () => {
    return mockTodoTasks
  },
}

module.exports = todoTaskResolvers;
