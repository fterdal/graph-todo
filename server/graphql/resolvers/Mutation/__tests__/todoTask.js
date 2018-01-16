/* eslint-env jest */
const {
  createTodoList,
  updateTodoList,
  addTodoTask,
} = require('../index');
const models = require('../../../../postgres/models');
const { reset } = require('../../../../postgres/models/__mocks__/mockData');

describe('todoTask mutations', () => {

  let
    user,
    todoList,
    todoTasks,
    req,
    res;
  beforeEach(() => {
    ({
      user,
      todoList,
      todoTasks,
      req,
      res,
    } = reset());
    jest.clearAllMocks();
  })

  test(() => {})

})
