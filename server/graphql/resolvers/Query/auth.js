module.exports = {
  me: (_, __, { req }) => {
    console.log('req.user', req.user);
    return {
      id: req.user.id,
      email: req.user.email,
    };
    // return req.user;
  },
  // me: () => 7234,
}
