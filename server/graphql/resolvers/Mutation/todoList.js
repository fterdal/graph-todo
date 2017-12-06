const { userIsLoggedIn, userCanEditTodoList } = require('../utils');

module.exports = {
  createTodoList: async (_, {
    input: { name, description, todoTasks }
  }, {
    req, res, models: { TodoTask, TodoList, User }
  }) => {
    userIsLoggedIn(req, res);
    const user = await User.findById(req.user.id);
    const todoList = await TodoList.create({ name, description });
    user.addTodoList(todoList);
    if (todoTasks && todoTasks.length) {
      const newTodoTasks = await Promise.all(todoTasks.map(todoTask => TodoTask.create(todoTask)));
      await Promise.all(newTodoTasks.map(todoTask => todoList.addTodoTask(todoTask)))
    }
    return todoList;
  },
  updateTodoList: async (_, {
    input: { todoListId, input: { name, description } }
  }, {
    req, res
  }) => {
    const todoList = await userCanEditTodoList(req, res, todoListId);
    // Unfortunately, we can't just pass the arguments in as-is, like:
    //   return todoList.update({ name, description })
    // If the client omitted one of the fields, then it will try to set
    // that field in the database to null
    const newData = {};
    if (name !== undefined) newData.name = name;
    if (description !== undefined) newData.description = description;
    return todoList.update(newData);
  },
}
