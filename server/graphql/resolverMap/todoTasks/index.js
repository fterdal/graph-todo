const todoTaskQueries = require('./todoTaskQueries');
const todoTaskMutations = require('./todoTaskMutations');

module.exports = {
  ...todoTaskQueries,
  ...todoTaskMutations,
};
