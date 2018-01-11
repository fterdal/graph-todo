/* eslint-env jest */
const todoLists = require('../todoLists');

test('allTodoLists retrieves all todolists', () => {
  const req = {
    user: {
      isAdmin: true,
    }
  };
  const res = { status: jest.fn() };
  const models = { TodoList: { findAll: jest.fn() } };

  // User is admin
  todoLists.allTodoLists(null, null, { req, res, models });
  expect(models.TodoList.findAll).toHaveBeenCalled();

  // User is not admin
  req.user.isAdmin = false;
  const userIsNotAdmin = () => {
    todoLists.allTodoLists(null, null, { req, res, models })
  }
  expect(userIsNotAdmin).toThrowError('Forbidden');
  expect(res.status).toHaveBeenCalledWith(403);

  // User is not logged in
  req.user = null;
  const userIsNotLoggedIn = () => {
    todoLists.allTodoLists(null, null, { req, res, models })
  }
  expect(userIsNotAdmin).toThrowError('Unauthorized');
});

// test('me resolves to user data when user is logged in', () => {
//   const user = {
//     id: 12,
//     email: 'hello@world.com',
//     todoLists: [
//       {
//         id: 7,
//         title: 'my list',
//       }
//     ]
//   }
//   expect(todoLists.me(null, null, {req: { user } })).toBe(user);
// });
