module.exports = {
  createTodoTask: async (_, {input: { title, text, completed }}, { models: { TodoTask } }) => {
    const todoTask = await TodoTask.create({ title, text, completed });
    return todoTask;
  },
}
