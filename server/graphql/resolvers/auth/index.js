const User = require('../../../postgres/models/user');

module.exports = {
  signup: async (_, { email, password }, context) => {
    // console.log('email', email);
    console.log('Object.keys(context)', Object.keys(context));
    console.log('context.session', context.session);
    console.log('context._passport', context._passport);
    const user = await User.create({ email, password });
    req.login(user, err => { if (err) console.error(err) });
    return user;
  },
  login: async (_, {email, password}, req) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User Not Found');
    if (!user.correctPassword(password)) throw new Error('Invalid Credentials');
    req.login(user, err => { if (err) console.error(err) });
    return user;
  },
}
