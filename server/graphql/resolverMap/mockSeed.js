const mocks = require('./mocks');

mocks.reset();

const seedTodoTasks = [
  {
    title: 'groceries',
    text: 'get milk, eggs, and bear traps',
    completed: false,
  },
  {
    title: 'clothes shopping',
    text: 'get some new pants and socks',
    completed: false,
  },
  {
    title: 'letter to grandma',
    text: "remember to mention grandpa's upcoming birthday",
    completed: true,
  },
  {
    title: 'change oil in car',
    completed: false,
  },
];

seedTodoTasks.forEach(task => {
  mocks.addTodoTask(task)
});

const seedTodoLists = [
  {
    name: 'first list',
    description: 'go do some stuff',
    tasks: [mocks.todoTaskById({id: 1}), mocks.todoTaskById({id: 2})],
  },
  {
    name: 'second list',
    description: 'get busy!',
    tasks: [mocks.todoTaskById({id: 3}), mocks.todoTaskById({id: 4})],
  },
  {
    name: 'third list',
    description: "don't lay around, get out there!",
    tasks: [mocks.todoTaskById({id: 1}), mocks.todoTaskById({id: 4})],
  },
  {
    name: 'fourth list',
    description: 'time to feel productive!',
    tasks: [mocks.todoTaskById({id: 1}), mocks.todoTaskById({id: 2}), mocks.todoTaskById({id: 3})],
  },
  {
    name: 'fifth list',
    description: 'time to feel productive!',
    tasks: [mocks.todoTaskById({id: 3})],
  },
];

seedTodoLists.forEach(list => {
  mocks.addTodoList(list)
});

const seedUsers = [
  {
    email: 'bobby@gmail.com',
    todoLists: [mocks.todoListById({id: 1}), mocks.todoListById({id: 5})],
  },
  {
    email: 'ellen@yahoo.com',
    todoLists: [mocks.todoListById({id: 2})],
  },
  {
    email: 'frank@hotmail.com',
    todoLists: [mocks.todoListById({id: 3})],
  },
  {
    email: 'janet@federalreserve.gov',
    todoLists: [mocks.todoListById({id: 4})],
  },
];

seedUsers.forEach(user => {
  mocks.addUser(user)
});
