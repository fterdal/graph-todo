const User = require('../../../postgres/models/user');

module.exports = {
  signup: async ({email, password}, req) => {
    const user = await User.create({ email, password })
    req.login(user, err => { if (err) console.error(err) })
    return user;
  },
}
