const TodoTask = require('./todoTask');
const TodoList = require('./todoList');
const User = require('./user');

/* Associations go here */
User.hasMany(TodoList);
TodoList.hasMany(TodoTask);

module.exports = {
  TodoTask,
  TodoList,
  User,
}
