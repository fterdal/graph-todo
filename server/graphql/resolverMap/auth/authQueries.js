const {
  user,
} = require('../mocks');

const authResolvers = {
  me: (_, req) => {
    console.log('req.user', req.user);
    return user({id: 1});
  },
}

module.exports = authResolvers;
