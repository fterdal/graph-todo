module.exports = {
  signup: async (_, {input: { email, password }}, { req, models: { User } }) => {
    const user = await User.create({ email, password });
    req.login(user, err => { if (err) console.error(err) });
    return user;
  },
  login: async (_, {input: { email, password }}, { req, models: { User } }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User Not Found');
    if (!user.correctPassword(password)) throw new Error('Invalid Credentials');
    req.login(user, err => { if (err) console.error(err) });
    return user;
  },
  logout: (_, __, { req } ) => {
    const user = req.user;
    req.logout();
    // const user = await User.findOne({ where: { email } });
    // if (!user) throw new Error('User Not Found');
    // if (!user.correctPassword(password)) throw new Error('Invalid Credentials');
    // req.login(user, err => { if (err) console.error(err) });
    return user;
  },
}
