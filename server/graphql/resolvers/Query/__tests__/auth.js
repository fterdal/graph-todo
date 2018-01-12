/* eslint-env jest */
const query = require('../index');

test('me resolves to null when user is not logged in', () => {
  expect(query.me(null, null, {req: { user: null } })).toBe(null);
});

test('me resolves to user data when user is logged in', () => {
  const user = {
    id: 12,
    email: 'hello@world.com',
    todoLists: [
      {
        id: 7,
        title: 'my list',
      }
    ]
  }
  expect(query.me(null, null, {req: { user } })).toBe(user);
});
