module.exports = {
  allTodoTasks: (_, __, { models: { TodoTask } }) => TodoTask.findAll(),
  todoTaskById: (_, { id }, { models: { TodoTask } }) => TodoTask.findById(id),
}
