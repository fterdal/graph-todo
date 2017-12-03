// const User = require('../../../postgres/models/user');

module.exports = {
  signup: async (_, {input: { email, password }}, { req, models: { User } }) => {
    // console.log('Object.keys(context)', Object.keys(context));
    // console.log('context.session', context.session);
    // console.log('context._passport', context._passport);
    // console.log('~~~~~ signup mutation running! ~~~~~');
    // console.log('email', email);
    // console.log('password', password);
    // console.log('context.res.req', context.res.req);
    console.log('User', User);
    // console.log('Object.keys(req)', Object.keys(req));
    // const req = context.res.req;
    console.log('~~~~~ signup mutation running! ~~~~~');
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
