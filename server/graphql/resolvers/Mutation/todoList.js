module.exports = {
  createTodoList: async (_, { input: { name, description, todoTasks } }, { models: { TodoTask, TodoList } }) => {
    const todoList = await TodoList.create({ name, description });
    if (todoTasks && todoTasks.length) {
      const newTodoTasks = await Promise.all(todoTasks.map(todoTask => {
        return TodoTask.create(todoTask);
      }));
      await Promise.all(newTodoTasks.map(todoTask => {
        todoList.addTodoTask(todoTask);
      }));
      return todoList;
    }
    return todoList;
  },
}

// const TodoList = require('../../../postgres/models/todoList');
// const TodoTask = require('../../../postgres/models/todoTask');
//
// module.exports = {
//   createTodoList: async (_, { input: { name, description, tasks } }) => {
//     try {
//       const todoList = await TodoList.create({ name, description, tasks });
//       if (tasks && tasks.length) {
//         const todoTasks = await Promise.all(tasks.map(task => {
//           return TodoTask.create(task);
//         }));
//         await Promise.all(todoTasks.map(todoTask => {
//           todoList.addTodoTask(todoTask)
//         }));
//       }
//       return todoList;
//     } catch(err) {
//       console.error(err);
//     }
//   },
// }
