const todoTaskResolvers = require('./todoTaskResolvers');
const todoListResolvers = require('./todoListResolvers');
const userResolvers = require('./userResolvers');
const mutationResolvers = require('./mutationResolvers');

module.exports = {
  ...todoListResolvers,
  ...todoTaskResolvers,
  ...userResolvers,
  ...mutationResolvers,
};
