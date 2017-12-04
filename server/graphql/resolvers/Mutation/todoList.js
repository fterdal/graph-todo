const { isSelfOrAdmin } = require('../utils');

module.exports = {
  createTodoList: async (_, {
    input: {
      name,
      description,
      todoTasks,
      userId,
    } }, {
      req,
      res,
      models: {
        TodoTask,
        TodoList,
        User,
      }
    }
  ) => {
    isSelfOrAdmin(req, res, userId);
    // TO-DO: Make sure that if the user's credentials are bad, nothing happens
    // to the database (currently the todoList gets created, but the user is
    // not associated with it)
    const user = await User.findById(userId);
    console.log('user');
    const todoList = await TodoList.create({ name, description });
    user.addTodoList(todoList);
    // if (user) {
    //   // const foundUser = await User.findOne({ where: { email: user.email } });
    //   // if (!foundUser) throw new Error('User Not Found');
    //   // if (!foundUser.correctPassword(user.password)) throw new Error('Invalid Credentials');
    // }
    if (todoTasks && todoTasks.length) {
      const newTodoTasks = await Promise.all(todoTasks.map(todoTask => TodoTask.create(todoTask)));
      await Promise.all(newTodoTasks.map(todoTask => todoList.addTodoTask(todoTask)))
    }
    return todoList;
  },
}
