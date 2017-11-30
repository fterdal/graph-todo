const TodoList = require('../../../postgres/models/todoList');

module.exports = {
  createTodoList: async ({ name, description }, req) => {
    const todoList = await TodoList.create({ name, description, tasks, user });
    return todoList;
  },
}
