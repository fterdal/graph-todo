const Query = {
  ...require('./todoTasks'),
}

const TodoTask = require('./todoTasks/TodoTask');

module.exports = {
  Query,
  // Mutation: {},
  TodoTask,
}
