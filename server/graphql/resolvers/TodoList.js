module.exports = {
  // todoTasks: async (todoList, { models: { TodoTask } }) => {
  todoTasks: async (todoList, _, { models: { TodoTask } }) => {
    // console.log('~~~~~~~ todoList', todoList);
    // console.log('~~~~~~~ TodoTask', TodoTask);
    // const myTodoTasks = await TodoTask.findAll({
    //   where: {
    //     todoListId: todoList.id
    //   }
    // })
    const myTodoTasks = await todoList.getTodoTasks();
    console.log('todoList.id', todoList.id);
    console.log('myTodoTasks', myTodoTasks);
    return myTodoTasks;
    // await TodoTask.findAll({
    //   where: {
    //     todoListId: todoList.id
    //   }
    // })
  }
}
