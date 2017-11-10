const mockUsers = [
  {
    id: 1,
    email: 'bobby@gmail.com'
  },
  {
    id: 2,
    email: 'ellen@yahoo.com'
  },
  {
    id: 3,
    email: 'frank@hotmail.com'
  },
  {
    id: 4,
    email: 'janet@federalreserve.gov'
  },
]

const mockTodoTasks = [
  {
    id: 1,
    title: 'groceries',
    text: 'get milk, eggs, and bear traps',
    completed: false,
  },
  {
    id: 2,
    title: 'clothes shopping',
    text: 'get some new pants and socks',
    completed: false,
  },
  {
    id: 3,
    title: 'letter to grandma',
    text: "remember to mention grandpa's upcoming birthday",
    completed: true,
  },
  {
    id: 4,
    title: 'change oil in car',
    completed: false,
  },
];

module.exports = {
  mockUsers,
  mockTodoTasks
};
