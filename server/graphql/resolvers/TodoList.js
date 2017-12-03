module.exports = {
  todoTasks: async todoList => {
    // Without this extra async call, we are unable to retrieve
    // the todoTasks from the createTodoList mutation. I think it
    // finishes creating the todoList, then immdiately runs this
    // function, before its finished creating/associating the
    // todoTasks. Try removing it and console.logging myTodoTasks
    await todoList.getTodoTasks();
    const myTodoTasks = await todoList.getTodoTasks();
    // console.log('myTodoTasks', myTodoTasks);
    return myTodoTasks;
  }
}
