/* eslint-env jest */
const {
  updateTodoTask,
  removeTodoTask,
} = require('../index');
const models = require('../../../../postgres/models');
const { reset } = require('../../../../postgres/models/__mocks__/mockData');

describe('todoTask mutations', () => {

  let
    todoList,
    todoTasks,
    todoTaskA,
    todoTaskB,
    req,
    res;
  beforeEach(() => {
    ({
      todoList,
      todoTasks,
      req,
      res,
    } = reset());
    [ todoTaskA, todoTaskB ] = todoTasks;
    jest.clearAllMocks();
  })

  test('updateTodoTask updates a todoTask', async () => {
    const input = {
      todoTaskId: todoTaskA.id,
      input: {
        title: 'study potions'
      },
    };
    const updatedTodoTask = await updateTodoTask(null, { input }, { req, res, models });
    expect(models.TodoTask.findById).toHaveBeenCalledWith(todoTaskA.id);
    expect(todoTaskA.update).toHaveBeenCalledWith(input.input);
    expect(updatedTodoTask.title).toBe(input.input.title);
  })

  test('updateTodoTask fails when todoTask does not belong to user', async () => {
    const input = {
      todoTaskId: todoTaskA.id,
      input: {
        title: 'study potions'
      },
    };
    const fakeReq = {...req, user: {
      isAdmin: false,
      canEditTodoList: jest.fn(() => false),
    } };
    let updatedTodoTask;
    try {
      updatedTodoTask = await updateTodoTask(null, { input }, { req: fakeReq, res, models });
      throw new Error('Incorrect Error');
    } catch(err) {
      expect(err).toEqual(new Error('Forbidden'));
      expect(models.TodoTask.findById).toHaveBeenCalledWith(todoTaskA.id);
      expect(todoTaskA.update).not.toHaveBeenCalled();
      expect(updatedTodoTask).toBe(undefined);
    }
  })

  test('updateTodoTask fails when todoTask does not exist', async () => {
    const input = {
      todoTaskId: 999,
      input: {
        title: 'study potions'
      },
    };
    const fakeReq = {...req, user: {
      isAdmin: false,
      canEditTodoList: jest.fn(() => false),
    } };
    let updatedTodoTask;
    try {
      updatedTodoTask = await updateTodoTask(null, { input }, { req: fakeReq, res, models });
      throw new Error('Incorrect Error');
    } catch(err) {
      expect(err).toEqual(new Error('Not Found'));
      expect(models.TodoTask.findById).toHaveBeenCalledWith(999);
      expect(updatedTodoTask).toBe(undefined);
    }
  })

  test('removeTodoTask removes a todoTask', async () => {
    const input = {
      todoTaskId: todoTaskA.id,
    };
    const removedTodoTaskId = await removeTodoTask(null, { input }, { req, res, models });
    expect(models.TodoTask.findById).toHaveBeenCalledWith(todoTaskA.id);
    expect(todoTaskA.destroy).toHaveBeenCalled();
    expect(removedTodoTaskId).toBe(input.todoTaskId);
  })

  test('removeTodoTask fails when todoTask does not belong to user', async () => {
    const input = {
      todoTaskId: todoTaskA.id,
    };
    const fakeReq = {...req, user: {
      isAdmin: false,
      canEditTodoList: jest.fn(() => false),
    } };
    let removedTodoTaskId;
    try {
      removedTodoTaskId = await removeTodoTask(null, { input }, { req: fakeReq, res, models });
      throw new Error('Incorrect Error');
    } catch(err) {
      expect(err).toEqual(new Error('Forbidden'));
      expect(models.TodoTask.findById).toHaveBeenCalledWith(todoTaskA.id);
      expect(todoTaskA.destroy).not.toHaveBeenCalled();
      expect(removedTodoTaskId).toBe(undefined);
    }
  })

})
