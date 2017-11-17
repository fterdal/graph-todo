const mocks = require('./mocks');

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

console.log('mocks.todoTaskById({id: 1})', mocks.todoTaskById({id: 1}))
console.log('mocks.listTodoTasks()', mocks.listTodoTasks())

const seedTodoLists = [
  {
    id: 1,
    name: 'first list',
    description: 'go do some stuff',
    tasks: [mocks.todoTaskById({id: 1}), mocks.todoTaskById({id: 2})],
  },
  {
    id: 2,
    name: 'second list',
    description: 'get busy!',
    tasks: [mocks.todoTaskById({id: 3}), mocks.todoTaskById({id: 4})],
  },
  {
    id: 3,
    name: 'third list',
    description: "don't lay around, get out there!",
    tasks: [mocks.todoTaskById({id: 1}), mocks.todoTaskById({id: 4})],
  },
  {
    id: 4,
    name: 'fourth list',
    description: 'time to feel productive!',
    tasks: [mocks.todoTaskById({id: 1}), mocks.todoTaskById({id: 2}), mocks.todoTaskById({id: 3})],
  },
  {
    id: 5,
    name: 'fifth list',
    description: 'time to feel productive!',
    tasks: [mocks.todoTaskById({id: 3})],
  },
];

seedTodoLists.forEach(list => {
  mocks.addTodoList(list)
});

console.log(mocks.listTodoLists())

mocks.reset();
