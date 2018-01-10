const auth = require('../auth');

test('me resolves to null when user is not logged in', () => {
  // TODO: Finish this up. Here's a skeleton
  console.log('auth.me(null, null, {req: null})', auth.me(null, null, {req: { user: null } }));
});
