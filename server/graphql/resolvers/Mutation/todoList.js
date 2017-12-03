module.exports = {
  createTodoList: async (_, {input: { name, description, todoTasks }}, { models: { TodoTask, TodoList } }) => {
    const todoList = await TodoList.create({ name, description, todoTasks });
    console.log('todoTasks:', todoTasks);
    if (todoTasks && todoTasks.length) {
      console.log('~~~ CREATING TODO TASKS ~~~');
      const newTodoTasks = await Promise.all(todoTasks.map(todoTask => {
        return TodoTask.create(todoTask);
      }));
      await Promise.all(newTodoTasks.map(todoTask => {
        todoList.addTodoTask(todoTask)
      }));
    }
    return todoList;
  },
}
