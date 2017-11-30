const {
  user,
} = require('../mocks');

module.exports = {
  me: (_, req) => {
    console.log('req.user', req.user);
    return user({id: 1});
  },
}
