/* eslint-env jest */
const query = require('../index');

describe('allTodoTasks', () => {

  let req, res, models;
  beforeEach(() => {
    req = {
      user: {
        isAdmin: true,
      }
    };
    res = { status: jest.fn() };
    models = { TodoTask: { findAll: jest.fn() } };
  })

  test('resolves when user is admin', () => {
    query.allTodoTasks(null, null, { req, res, models });
    expect(models.TodoTask.findAll).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      query.allTodoTasks(null, null, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      query.allTodoTasks(null, null, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});

describe('todoTaskById', () => {

  let req, res, models;
  beforeEach(() => {
    req = {
      user: {
        isAdmin: true,
      }
    };
    res = { status: jest.fn() };
    models = { TodoTask: { findById: jest.fn() } };
  })

  test('resolves when user is admin', () => {
    query.todoTaskById(null, { id: 1 }, { req, res, models });
    expect(models.TodoTask.findById).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      query.todoTaskById(null, { id: 1 }, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      query.todoTaskById(null, { id: 1 }, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});
