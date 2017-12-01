const TodoListModel = require('../../../postgres/models/todoList');
const TodoTask = require('../../../postgres/models/todoTask');

class TodoList {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tasks = [];
    console.log('TODOLIST CLASS WAS CALLED!');
  }

  tasks() {
    return this.tasks;
  }
}

module.exports = {
  todoListById: async ({ id }) => await new TodoList(
    5,
    'fake list',
    'fake description',
  ),
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
