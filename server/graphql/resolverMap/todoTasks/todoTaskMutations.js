const {
  completeTask,
} = require('../mocks');

const todoTaskMutations = {
  completeTaskById: ({ id }) => completeTask({ id }),
}

module.exports = todoTaskMutations;
