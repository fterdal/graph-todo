const todoTasks = require('./todoTasks');
const todoLists = require('./todoLists');
const users = require('./users');

require('./mockSeed');

module.exports = {
  ...todoTasks,
  ...todoLists,
  ...users,
};
