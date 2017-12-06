const { userIsLoggedIn, userCanEditTodoTask } = require('../utils');

module.exports = {
  // // I don't think I need this action at all. TodoTasks should always
  // // be associated with a todoList. Creating one sby itself should not
  // // be supported.
  // createTodoTask: async (_, {
  //   input: { title, text, completed }
  // }, {
  //   req, res, models: { TodoTask }
  // }) => {
  //   userIsLoggedIn(req, res);
  //   const todoTask = await TodoTask.create({ title, text, completed });
  //   return todoTask;
  // },
  updateTodoTask: async (_,
  {
    input: { todoTaskId, input: { title, text, completed } }
  }, {
    req, res
  }) => {
    const todoTask = await userCanEditTodoTask(req, res, todoTaskId);
    const newData = {};
    if (title !== undefined) newData.title = title;
    if (text !== undefined) newData.text = text;
    if (completed !== undefined) newData.completed = completed;
    return todoTask.update(newData);
  },
}
