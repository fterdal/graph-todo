/* eslint-env jest */
const {
  createTodoList,
  updateTodoList,
  addTodoTask,
} = require('../index');

let {
  user,
  todoList,
  todoTasks,
  req,
  res,
} = require('../../../../postgres/models/__mocks__/mockData');

const models = require('../../../../postgres/models');

describe('todoList mutations', () => {

  // let models;
  beforeEach(() => {
    // models = {
    //   User: {
    //     findById: jest.fn(() => {
    //       return user;
    //     }),
    //   },
    //   TodoList: {
    //     create: jest.fn(() => {
    //       return todoList;
    //     }),
    //     findById: jest.fn(id => {
    //       if (id !== todoList.id) {
    //         throw new Error('Not Found')
    //       }
    //       return todoList;
    //     }),
    //   },
    //   TodoTask: {
    //     create: jest.fn(),
    //   },
    // };
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
        name: todoList.name,
        description: todoList.description,
      },
    };
    input.input.name = 'reading';
    const updatedTodoList = await updateTodoList(null, { input }, { req, res, models });
    expect(todoList.update).toHaveBeenCalledWith({name: 'reading', description: todoList.description});
    expect(updatedTodoList.name).toBe('reading')
    expect(updatedTodoList.description).toBe(todoList.description)
  })


})
