const Query = {
  ...require('./Query'),
}

const Mutation = {
  ...require('./Mutation'),
}

const TodoList = require('./todoLists/TodoList');

module.exports = {
  Query,
  Mutation,
  TodoList,
}
