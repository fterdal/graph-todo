const { isSelfOrAdmin } = require('../utils');

module.exports = {
  // Not sure how to format this function. There's so much destructuring in the
  // parameters list, and it should definitely be on more than one line.
  createTodoList: async (_, {
    input: { name, description, todoTasks, userId }
  }, {
    req, res, models: { TodoTask, TodoList, User }
  }) => {
    isSelfOrAdmin(req, res, userId);
    const user = await User.findById(userId);
    const todoList = await TodoList.create({ name, description });
    user.addTodoList(todoList);
    if (todoTasks && todoTasks.length) {
      const newTodoTasks = await Promise.all(todoTasks.map(todoTask => TodoTask.create(todoTask)));
      await Promise.all(newTodoTasks.map(todoTask => todoList.addTodoTask(todoTask)))
    }
    return todoList;
  },
}
