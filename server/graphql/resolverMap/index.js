const queries = require('./queries');
const mutations = require('./mutations');

module.exports = {
  ...queries,
  ...mutations,
};
