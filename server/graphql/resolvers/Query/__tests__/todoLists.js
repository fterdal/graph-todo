/* eslint-env jest */
const todoLists = require('../todoLists');

describe('allTodoLists', () => {

  let req, res, models;
  beforeEach(() => {
    req = {
      user: {
        isAdmin: true,
      }
    };
    res = { status: jest.fn() };
    models = { TodoList: { findAll: jest.fn() } };
  })

  test('resolves when user is admin', () => {
    todoLists.allTodoLists(null, null, { req, res, models });
    expect(models.TodoList.findAll).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      todoLists.allTodoLists(null, null, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      todoLists.allTodoLists(null, null, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});
