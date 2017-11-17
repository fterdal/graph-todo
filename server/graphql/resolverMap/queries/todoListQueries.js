const { mockTodoLists } = require('../mocks');

const todoListResolvers = {
  TodoListById: ({ id }) => {
    return mockTodoLists.find(list => {
      return list.id === id;
    })
  },
  AllTodoLists: () => {
    return mockTodoLists
  },
}

module.exports = todoListResolvers;
