const todoTasks = require('./todoTasks');
const todoLists = require('./todoLists');
const users = require('./users');

module.exports = {
  ...todoTasks,
  ...todoLists,
  ...users,
};
