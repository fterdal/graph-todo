const TodoListModel = require('../../../postgres/models/todoList');
const TodoTask = require('../../../postgres/models/todoTask');
const TodoList = require('./TodoList');

module.exports = {
  todoListById: ({ id }) => new TodoList(id),
  // todoListById: ({ id }) => TodoListModel.findById(id),
  allTodoLists: async () => {
    const results = await TodoListModel.findAll({
      include: [{
        model: TodoTask
      }]
    });
    // console.log(results[0].todoTasks);
    return results;
  },
  // TodoList: () => ({
  //   id: 1,
  //   name: 'sdfsdf',
  //   description: 'fghfghfgh',
  //   tasks: null,
  // })
}
