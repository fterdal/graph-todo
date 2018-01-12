/* eslint-env jest */
const query = require('../index');

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
    query.allTodoLists(null, null, { req, res, models });
    expect(models.TodoList.findAll).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      query.allTodoLists(null, null, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      query.allTodoLists(null, null, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});

describe('todoListById', () => {

  let req, res, models;
  beforeEach(() => {
    req = {
      user: {
        isAdmin: true,
      }
    };
    res = { status: jest.fn() };
    models = { TodoList: { findById: jest.fn() } };
  })

  test('resolves when user is admin', () => {
    query.todoListById(null, { id: 1 }, { req, res, models });
    expect(models.TodoList.findById).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      query.todoListById(null, { id: 1 }, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      query.todoListById(null, { id: 1 }, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});
