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
    tasks: [mocks.todoTask({id: 1}), mocks.todoTask({id: 2})],
  },
  {
    name: 'second list',
    description: 'get busy!',
    tasks: [mocks.todoTask({id: 3}), mocks.todoTask({id: 4})],
  },
  {
    name: 'third list',
    description: "don't lay around, get out there!",
    tasks: [mocks.todoTask({id: 1}), mocks.todoTask({id: 4})],
  },
  {
    name: 'fourth list',
    description: 'time to feel productive!',
    tasks: [mocks.todoTask({id: 1}), mocks.todoTask({id: 2}), mocks.todoTask({id: 3})],
  },
  {
    name: 'fifth list',
    description: 'time to feel productive!',
    tasks: [mocks.todoTask({id: 3})],
  },
];

seedTodoLists.forEach(list => {
  mocks.addTodoList(list)
});

const seedUsers = [
  {
    email: 'bobby@gmail.com',
    todoLists: [mocks.todoList({id: 1}), mocks.todoList({id: 5})],
  },
  {
    email: 'ellen@yahoo.com',
    todoLists: [mocks.todoList({id: 2})],
  },
  {
    email: 'frank@hotmail.com',
    todoLists: [mocks.todoList({id: 3})],
  },
  {
    email: 'janet@federalreserve.gov',
    todoLists: [mocks.todoList({id: 4})],
  },
];

seedUsers.forEach(user => {
  mocks.addUser(user)
});
