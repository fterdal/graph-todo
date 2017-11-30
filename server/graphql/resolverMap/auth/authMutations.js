const User = require('../../../postgres/models/user');


module.exports = {
  signup: async ({email, password}, req) => {
    const user = await User.create({ email, password })
    return req.login(user, err => err ? next(err) : user);
  },
}
 // 
 // User.create(req.body)
 //  .then(user => {
 //    req.login(user, err => err ? next(err) : res.json(user))
 //  })
 //  .catch(err => {
 //    if (err.name === 'SequelizeUniqueConstraintError')
 //      res.status(401).send('User already exists')
 //    else next(err)
 //  })
