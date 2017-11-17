const { mockTodoTasks } = require('../mocks');

const todoTaskMutations = {
  completeTaskById: ({ id }) => {
    const foundTask = mockTodoTasks.find(task => task.id === id)
    foundTask.completed = !foundTask.completed;
    return foundTask;
  },
}

module.exports = todoTaskMutations;
