module.exports = {
  allUsers: (_, __, { models: { User } }) => User.findAll(),
  userById: (_, { id }, { models: { User } }) => User.findById(id),
}
