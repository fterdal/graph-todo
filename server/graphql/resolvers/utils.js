const isLoggedIn = (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized');
  }
}

const isAdmin = (req, res) => {
  isLoggedIn(req, res);
  if (!req.user.isAdmin)  {
    res.status(403);
    throw new Error('Forbidden');
  }
}

module.exports = {
  isLoggedIn,
  isAdmin,
}
