const {
  completeTask,
} = require('../mocks');

module.exports = {
  completeTaskById: ({ id }) => completeTask({ id }),
}
