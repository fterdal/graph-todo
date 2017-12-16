module.exports = {
  signup: async (_, {input: { email, password }}, { req, res, models: { User } }) => {
    let user;
    try {
      user = await User.create({ email, password });
    } catch(err) {
      res.status(400);
      throw new Error('User Already Exists')
    }
    req.login(user, err => { if (err) throw new Error(err) });
    return user;
  },
  login: async (_, {input: { email, password }}, { req, models: { User } }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User Not Found');
    if (!user.correctPassword(password)) throw new Error('Invalid Credentials');
    req.login(user, err => { if (err) throw new Error(err) });
    return user;
  },
  logout: (_, __, { req } ) => {
    const user = req.user;
    req.logout();
    return user;
  },
}
