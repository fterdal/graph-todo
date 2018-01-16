/* eslint-env jest */
const {
  createTodoList,
  updateTodoList,
  addTodoTask,
} = require('../index');
const models = require('../../../../postgres/models');
const { reset } = require('../../../../postgres/models/__mocks__/mockData');

describe('todoList mutations', () => {

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

  test('createTodoList creates a new todoTist', async () => {
    const input = {...todoList, todoTasks };
    const createdTodoList = await createTodoList(null, { input }, { req, res, models });
    expect(res.status).not.toHaveBeenCalled();
    expect(models.User.findById).toHaveBeenCalledWith(req.user.id);
    expect(models.TodoList.create).toHaveBeenCalledWith({
      name: input.name,
      description: input.description,
    });
    expect(user.addTodoList).toHaveBeenCalledWith(createdTodoList);
    expect(createdTodoList).toBe(todoList);
  })

  test('updateTodoList updates a todoTist', async () => {
    const input = {
      todoListId: todoList.id,
      input: {
        name: 'reading',
        description: todoList.description,
      },
    };
    const updatedTodoList = await updateTodoList(null, { input }, { req, res, models });
    expect(todoList.update).toHaveBeenCalledWith({name: 'reading', description: todoList.description});
    expect(updatedTodoList.name).toBe('reading')
    expect(updatedTodoList.description).toBe(todoList.description)
  })

  test('updateTodoList fails when todoTist does not belong to user', async () => {
    const input = {
      todoListId: todoList.id,
      input: {
        name: 'reading',
        description: todoList.description,
      },
    };
    const fakeReq = {...req, user: {
      isAdmin: false,
      canEditTodoList: jest.fn(() => false),
    } };
    let updatedTodoList;
    try {
      updatedTodoList = await updateTodoList(null, { input }, { req: fakeReq, res, models });
      throw new Error('Incorrect Error')
    } catch(err) {
      expect(err).toEqual(new Error('Forbidden'))
      expect(todoList.update).not.toHaveBeenCalled();
      expect(updatedTodoList).toBe(undefined)
    }
  })

  test('addTodoTask adds a todoTask to a todoList', async () => {
    const [ todoTaskA, todoTaskB ] = todoTasks;
    const input = {
      todoListId: todoList.id,
      input: todoTaskA,
    };
    await addTodoTask(null, { input }, { req, res, models });
    expect(todoList.addTodoTask).toHaveBeenCalledWith(todoTaskA);
    expect(models.TodoTask.create).toHaveBeenCalled();
  })


})
