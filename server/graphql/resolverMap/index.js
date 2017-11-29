require('./mockSeed');

module.exports = {
  ...require('./todoTasks'),
  ...require('./todoLists'),
  ...require('./users'),
  ...require('./auth'),
};
