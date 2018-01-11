/* eslint-env jest */
const todoTasks = require('../todoTasks');

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
    todoTasks.allTodoTasks(null, null, { req, res, models });
    expect(models.TodoTask.findAll).toHaveBeenCalled();
  })

  test('throws when user is not admin', () => {
    req.user.isAdmin = false;
    const userIsNotAdmin = () => {
      todoTasks.allTodoTasks(null, null, { req, res, models })
    }
    expect(userIsNotAdmin).toThrowError('Forbidden');
    expect(res.status).toHaveBeenCalledWith(403);
  })

  test('throws when user is not logged in', () => {
    req.user = null;
    const userIsNotLoggedIn = () => {
      todoTasks.allTodoTasks(null, null, { req, res, models })
    }
    expect(userIsNotLoggedIn).toThrowError('Unauthorized');
    expect(res.status).toHaveBeenCalledWith(401);
  })
});

test('me resolves to user data when user is logged in', () => {

});
