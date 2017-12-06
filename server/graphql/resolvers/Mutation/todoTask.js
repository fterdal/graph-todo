module.exports = {
  createTodoTask: async (_,
    {
      input: { title, text, completed }
    }, {
      req, res, models: { TodoTask }
    }) => {
    const todoTask = await TodoTask.create({ title, text, completed });
    return todoTask;
  },
}
