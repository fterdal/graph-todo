const { mockTodoTasks } = require('./mocks');

const mutationResolvers = {
  CompleteTask: ({ id }) => {
    const foundTask = mockTodoTasks.find(task => task.id === id)
    foundTask.completed = !foundTask.completed;
    return foundTask;
  },
}

module.exports = mutationResolvers;
