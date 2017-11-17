let mockTodoTasks = [
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
const originalMockTodoTasks = {...mockTodoTasks};

let mockTodoLists = [
  {
    id: 1,
    name: 'first list',
    description: 'go do some stuff',
    tasks: [mockTodoTasks[0], mockTodoTasks[1]],
  },
  {
    id: 2,
    name: 'second list',
    description: 'get busy!',
    tasks: [mockTodoTasks[2], mockTodoTasks[3]],
  },
  {
    id: 3,
    name: 'third list',
    description: "don't lay around, get out there!",
    tasks: [mockTodoTasks[0], mockTodoTasks[3]],
  },
  {
    id: 4,
    name: 'fourth list',
    description: 'time to feel productive!',
    tasks: [mockTodoTasks[0], mockTodoTasks[1], mockTodoTasks[2]],
  },
  {
    id: 5,
    name: 'fifth list',
    description: 'time to feel productive!',
    tasks: [mockTodoTasks[2]],
  },
];
const originalMockTodoLists = {...mockTodoLists};

let mockUsers = [
  {
    id: 1,
    email: 'bobby@gmail.com',
    todoLists: [mockTodoLists[0], mockTodoLists[4]],
  },
  {
    id: 2,
    email: 'ellen@yahoo.com',
    todoLists: [mockTodoLists[1]],
  },
  {
    id: 3,
    email: 'frank@hotmail.com',
    todoLists: [mockTodoLists[2]],
  },
  {
    id: 4,
    email: 'janet@federalreserve.gov',
    todoLists: [mockTodoLists[3]],
  },
];
const originalMockUsers = Object.assign({}, mockUsers);

const reset = () => {
  console.log('originalMockUsers[0]', originalMockUsers[0]);
  mockUsers = {...originalMockUsers};
  mockTodoTasks = originalMockTodoTasks;
  mockTodoLists = originalMockTodoLists;
}

console.log('mockUsers[0]', mockUsers[0]);
mockUsers[0].email = 'bobbys new email dot com';
console.log('mockUsers[0]', mockUsers[0]);
reset();
console.log('mockUsers[0]', mockUsers[0]);

module.exports = {
  mockUsers,
  mockTodoTasks,
  mockTodoLists,
  reset,
};
