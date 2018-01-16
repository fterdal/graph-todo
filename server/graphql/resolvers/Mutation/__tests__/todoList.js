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

  beforeEach(() => {

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

  test('addTodoTask adds a todoTask to a todoList', async () => {
    const [ todoTaskA, todoTaskB ] = todoTasks;
    // console.log('todoTaskA', todoTaskA);
    const input = {
      todoListId: todoList.id,
      input: {
        title: todoTaskA.title,
        text: todoTaskA.text,
        completed: todoTaskA.completed,
      },
    };
    const modifiedTodoList = await addTodoTask(null, { input }, { req, res, models });
    // expect(todoList.addTodoTask).toHaveBeenCalledWith({});
    // expect(updatedTodoList.name).toBe('reading')
    // expect(updatedTodoList.description).toBe(todoList.description)
  })

})
