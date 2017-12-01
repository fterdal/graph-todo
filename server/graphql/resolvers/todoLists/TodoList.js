const TodoTask = require('../../../postgres/models/todoTask');

module.exports = {
  todoTasks: (todoList) => {
    return TodoTask.findAll({
      where: {
        todoListId: todoList.id
      }
    })
  }
}
