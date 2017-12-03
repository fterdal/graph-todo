module.exports = {
  createTodoList: async (_, {
    input: {
      name,
      description,
      todoTasks,
      user,
    } }, {
      req,
      models: {
        TodoTask,
        TodoList,
        User,
      }
    }) => {
    const todoList = await TodoList.create({ name, description });
    if (todoTasks && todoTasks.length) {
      const newTodoTasks = await Promise.all(todoTasks.map(todoTask => {
        return TodoTask.create(todoTask);
      }));
      await Promise.all(newTodoTasks.map(todoTask => {
        todoList.addTodoTask(todoTask);
      }));
    }
    console.log('user', user);
    console.log('req.user', req.user);
    // if (user && req.user) {
    //
    // }
    return todoList;
  },
}
