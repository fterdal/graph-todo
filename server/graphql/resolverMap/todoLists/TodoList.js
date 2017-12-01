const TodoListModel = require('../../../postgres/models/todoList');
const TodoTaskModel = require('../../../postgres/models/todoTask');

/*
Approach: This class will only take id as a constructor
*/

class TodoList {
  constructor(id) {
    this.id = id;
    this.cache = null;
  }

  // Check the cache to see if its hydrated. If not, fill it with data from
  // the database. Either way, return the cache afterwards.
  async checkCache() {
    if (this.cache) return this.cache;
    this.cache = await TodoListModel.findById(this.id, {
      include: [{
        model: TodoTaskModel
      }]
    });
    return this.cache;
  }

  async tasks() {
    if (this.cache) {
      return this.cache.tasks;
    }
    this.cache = await TodoListModel.findById(this.id, {
      include: [{
        model: TodoTaskModel
      }]
    });
    console.log('~~~ TodoList tasks() RUNNING ~~~');
    console.log('this.cache', this.cache);
    return this.cache.todoTasks;
  }
}


module.exports = TodoList;
