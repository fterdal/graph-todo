module.exports = {
  me: (_, __, { req }) => {
    console.log('req.user', req.user);
    // console.log('ME req.session.cookie', req.session.cookie);
    return req.user;
  },
}
