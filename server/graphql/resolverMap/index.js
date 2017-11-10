const todoTaskResolvers = require('./todoTaskResolvers');
const userResolvers = require('./userResolvers');

module.exports = {
  ...todoTaskResolvers,
  ...userResolvers,
};
