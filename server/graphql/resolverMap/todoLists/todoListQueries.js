const TodoList = require('../../../postgres/models/todoList');
const TodoTask = require('../../../postgres/models/todoTask');

module.exports = {
  todoListById: ({ id }) => TodoList.findById(id),
  allTodoLists: async () => {
    const results = await TodoList.findAll({
      include: [{
        model: TodoTask
      }]
    });
    // console.log(results[0].todoTasks);
    return results;
  },
  TodoList: {
    tasks: () => {
      console.log('~~~~~~~~~~~~~~~');
      console.log('~~~~ HELLO ~~~~');
      console.log('~~~~~~~~~~~~~~~');
      return [
        {
          id: 3,
          title: 'asd',
          text: 'dgdfg',
          comleted: true
        },
        {
          id: 3,
          title: 'asd',
          text: 'dgdfg',
          comleted: true
        },
      ]
    }
  }
}
