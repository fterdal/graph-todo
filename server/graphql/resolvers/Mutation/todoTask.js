const { userIsLoggedIn, userCanEditTodoTask } = require('../utils');

module.exports = {
  createTodoTask: async (_, {
    input: { title, text, completed }
  }, {
    req, res, models: { TodoTask }
  }) => {
    userIsLoggedIn(req, res);
    const todoTask = await TodoTask.create({ title, text, completed });
    return todoTask;
  },
  updateTodoTask: async (_,
    {
      input: { todoTaskId, input: { title, text, completed } }
    }, {
      req, res
    }) => {
    const todoTask = await TodoTask.create({ title, text, completed });
    return todoTask;
  },
}
