/* eslint-env jest */
const query = require('../index');

describe('allUsers', () => {

  let req, res, models;
  beforeEach(() => {
    req = {
      user: {
        isAdmin: true,
      }
    };
    res = { status: jest.fn() };
    models = { User: { findAll: jest.fn() } };
  })

  test('resolves when user is admin', () => {
    query.allUsers(null, null, { req, res, models });
    expect(models.User.findAll).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      query.allUsers(null, null, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      query.allUsers(null, null, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});

describe('userById', () => {

  let req, res, models;
  beforeEach(() => {
    req = {
      user: {
        isAdmin: true,
      }
    };
    res = { status: jest.fn() };
    models = { User: { findById: jest.fn() } };
  })

  test('resolves when user is admin', () => {
    query.userById(null, { id: 1 }, { req, res, models });
    expect(models.User.findById).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      query.userById(null, { id: 1 }, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      query.userById(null, { id: 1 }, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});
