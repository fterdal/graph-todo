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
    if (user) {
      const foundUser = await User.findOne({ where: { email: user.email } });
      if (!foundUser) throw new Error('User Not Found');
      if (!foundUser.correctPassword(user.password)) throw new Error('Invalid Credentials');
      if (req && req.user && req.user.id === foundUser.id) foundUser.addTodoList(todoList);
    }
    // if (user && req.user) {
    //   const foundUser = await User.find({
    //     where: { email: user.email }
    //   });
    //   if (foundUser.id === req.user.id) {
    //     foundUser.addTodoList(todoList);
    //   } else {
    //     throw new Error('Not Authorized');
    //   }
    // }
    return todoList;
  },
}
