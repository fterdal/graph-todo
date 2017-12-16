module.exports = {
  me: (_, __, { req }) => {
    return req.user;
  },
}
