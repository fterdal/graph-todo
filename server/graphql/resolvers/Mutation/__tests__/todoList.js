/* eslint-env jest */
const {
  createTodoList,
  updateTodoList,
  addTodoTask,
} = require('../index');

describe('todoList mutations', () => {

  let user, todoList, todoTasks, inputUpdate, inputAddTodoTask, req, res, models;
  beforeEach(() => {
    user = {
      id: 7,
      email: 'harrypotter@hogwarts.edu',
      addTodoList: jest.fn(),
    };
    todoList = {
      id: 3,
      name: 'studying',
      description: 'do some reading, homework, etc',
      addTodoTask: jest.fn(),
    };
    todoTasks = [{
      title: 'potions reading',
      text: 'chapter 4 on polymorph',
      completed: true,
    }, {
      title: 'divination assignment',
      text: 'predict a celestial event (just ask hermione)',
    }];
    req = {
      user: {
        id: 7,
        isAdmin: true,
        canEditTodoList: jest.fn(() => true),
      }
    };
    res = { status: jest.fn() };
    models = {
      User: {
        findById: jest.fn(() => {
          return user;
        }),
      },
      TodoList: {
        create: jest.fn(() => {
          return todoList;
        }),
        findById: jest.fn(id => {
          if (id !== todoList.id) {
            throw new Error('Not Found')
          }
          return todoList;
        }),
      },
      TodoTask: {
        create: jest.fn(),
      },
    };
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
      input: todoList,
    };
    input.input.name = 'reading';
    const updatedTodoList = await updateTodoList(null, { input }, { req, res, models });
    // console.log('updatedTodoList', updatedTodoList);
  })


})