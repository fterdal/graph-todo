const todoTaskResolvers = require('./todoTaskResolvers');
const todoListResolvers = require('./todoListResolvers');
const userResolvers = require('./userResolvers');

module.exports = {
  ...todoListResolvers,
  ...todoTaskResolvers,
  ...userResolvers,
};
