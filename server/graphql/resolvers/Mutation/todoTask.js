const { userCanEditTodoTask } = require('../utils');

module.exports = {
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
