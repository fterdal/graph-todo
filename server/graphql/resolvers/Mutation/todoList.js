const { isLoggedIn } = require('../utils');

module.exports = {
  // Not sure how to format this function. There's so much destructuring in the
  // parameters list, and it should definitely be on more than one line.
  createTodoList: async (_, {
    input: { name, description, todoTasks }
  }, {
    req, res, models: { TodoTask, TodoList, User }
  }) => {
    isLoggedIn(req, res);
    const user = await User.findById(req.user.id);
    const todoList = await TodoList.create({ name, description });
    user.addTodoList(todoList);
    if (todoTasks && todoTasks.length) {
      const newTodoTasks = await Promise.all(todoTasks.map(todoTask => TodoTask.create(todoTask)));
      await Promise.all(newTodoTasks.map(todoTask => todoList.addTodoTask(todoTask)))
    }
    return todoList;
  },
}
