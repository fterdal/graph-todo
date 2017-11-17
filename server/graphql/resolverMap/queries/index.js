const todoTaskQueries = require('./todoTaskQueries');
const todoListQueries = require('./todoListQueries');
const userQueries = require('./userQueries');

module.exports = {
  ...todoListQueries,
  ...todoTaskQueries,
  ...userQueries,
};
