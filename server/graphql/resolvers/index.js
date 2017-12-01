const Query = {
  ...require('./todoTasks'),
  ...require('./todoLists'),
}

const Mutation = {
  ...require('./auth'),
}

const TodoList = require('./todoLists/TodoList');

module.exports = {
  Query,
  Mutation,
  TodoList,
}
