const { mockTodoLists } = require('../mocks');

const todoListResolvers = {
  todoListById: ({ id }) => {
    return mockTodoLists.find(list => {
      return list.id === id;
    })
  },
  allTodoLists: () => {
    return mockTodoLists
  },
}

module.exports = todoListResolvers;
