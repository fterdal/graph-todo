/* eslint-env jest */
const { todoListById, allTodoLists } = require('../index');

const models = require('../../../../postgres/models');
const { reset } = require('../../../../postgres/models/__mocks__/mockData');

xdescribe('allTodoLists', () => {

  let
    req,
    res,
    todoList;
  beforeEach(() => {
    ({
      req,
      res,
      todoList,
    } = reset());
    jest.clearAllMocks();
    // req = {
    //   user: {
    //     isAdmin: true,
    //   }
    // };
    // res = { status: jest.fn() };
  })

  test('resolves when user is admin', () => {
    allTodoLists(null, null, { req, res, models });
    expect(models.TodoList.findAll).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      allTodoLists(null, null, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      allTodoLists(null, null, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});

describe('todoListById', () => {

  let
    req,
    res,
    todoList;
  beforeEach(() => {
    ({
      req,
      res,
      todoList,
    } = reset());
    jest.clearAllMocks();
    // req = {
    //   user: {
    //     isAdmin: true,
    //     canEditTodoList: jest.fn(() => true),
    //   }
    // };
    // res = { status: jest.fn() };
    // models = { TodoList: { findById: jest.fn() } };
  })

  test.only('resolves when user is admin', () => {
    const returnedTodoList = todoListById(null, { id: 3 }, { req, res, models });
    expect()
    expect(models.TodoList.findById).toHaveBeenCalled();
  })

  test('resolves when user can edit todoList', () => {
    req.user.isAdmin = false;
    todoListById(null, { id: 3 }, { req, res, models });
    expect(models.TodoList.findById).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      todoListById(null, { id: 3 }, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      todoListById(null, { id: 3 }, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});
