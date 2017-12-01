const TodoListModel = require('../../../postgres/models/todoList');
const TodoTaskModel = require('../../../postgres/models/todoTask');

/*
  Approach: This class will only take id as a constructor. It'll keep a cache
  of its fields from the database. When one of the field resolvers is called

  TODO: Error handling is terrible right now. Fix that.
  TODO: It makes too many database calls. It should only make one call per
        instance, rather than on each field.
*/

class TodoList {
  constructor(searchId) {
    this.searchId = searchId;
    this.cache = null;
  }

  // Check the cache to see if its hydrated. If not, fill it with data from
  // the database. Either way, return the cache afterwards.
  async checkCache() {
    if (this.cache) return this.cache;
    const hydratedCache = await TodoListModel.findById(this.searchId, {
      include: [
        { model: TodoTaskModel },
      ]
    });
    this.cache = hydratedCache;
    console.log('~~~~~ Just made a database call! ~~~~~');
    console.log('hydratedCache.todoTasks', hydratedCache.todoTasks);
    // console.log('this.cache', this.cache);
    return this.cache;
  }

  async id() {
    const cache = await this.checkCache();
    console.log('cache:', cache);
    const id = cache.id;
    // const { id } = await this.checkCache();
    return id;
  }

  async name() {
    const { name } = await this.checkCache();
    return name;
  }

  async description() {
    const { description } = await this.checkCache();
    return description;
  }


  async todoTasks() {
    const { todoTasks } = await this.checkCache();
    return todoTasks;
  }
}


module.exports = TodoList;
