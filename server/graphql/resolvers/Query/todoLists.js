module.exports = {
  allTodoLists: (_, __, { models: { TodoList } }) => TodoList.findAll(),
  todoListById: (_, { id }, { models: { TodoList } }) => TodoList.findById(id),
}
