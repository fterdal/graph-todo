module.exports = {
  isSelfOrAdmin: (req, res, userId) => {
    if (!req.user) {
      res.status(401);
      throw new Error('Not authorized')
    }
    else if (req.user.privilege !== 'admin' && req.user.id !== userId)  {
      res.status(403);
      throw new Error('Not authorized')
    }
  },
  isAdmin: () => {}
}
