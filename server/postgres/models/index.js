const TodoTask = require('./todoTask');
const TodoList = require('./todoList');
const User = require('./user');

console.log('UH OH THIS WAS NOT SUPPOSED TO HAPPEN!');

/* Associations go here */
User.hasMany(TodoList);
TodoList.hasMany(TodoTask);

module.exports = {
  TodoTask,
  TodoList,
  User,
}
