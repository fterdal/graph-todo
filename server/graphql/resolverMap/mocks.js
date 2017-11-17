let mockTodoTasks = {}
let mockTodoLists = {}
let mockUsers = {}

const largestId = (obj) => {
  return Object.keys(obj).reduce((largest, elem) => {
    return Number(elem) > largest ? Number(elem) : largest
  }, 0)
}

const getData = (obj) =>  {
  return Object.keys(obj).map(key => {
    return obj[key];
  })
}

module.exports = {

  // RESET
  reset() {
    mockTodoTasks = {}
    mockTodoLists = {}
    mockUsers = {}
  },

  // TODOTASKS
  addTodoTask({title, text, completed = false}) {
    const id = largestId(mockTodoTasks) + 1;
    mockTodoTasks[id] = {id, title, text, completed};
  },

  todoTaskById({id}) {
    return mockTodoTasks[id]
  },

  listTodoTasks() {
    return getData(mockTodoTasks);
  },

  // TODOLISTS
  addTodoList({name, description, tasks = []}) {
    const id = largestId(mockTodoLists) + 1;
    mockTodoLists[id] = {id, name, description, tasks};
  },

  todoListById({id}) {
    return mockTodoLists[id]
  },

  listTodoLists() {
    return getData(mockTodoLists);
  },

  // USERS
  addUser({email, taskLists = []}) {
    const id = largestId(mockUsers) + 1;
    mockUsers[id] = {id, email, taskLists};
  },

  userById({id}) {
    return mockUsers[id]
  },

  listUsers() {
    return getData(mockUsers);
  },

  // mockTodoLists : [
  //   {
  //     id: 1,
  //     name: 'first list',
  //     description: 'go do some stuff',
  //     tasks: [this.mockTodoTasks[0], this.mockTodoTasks[1]],
  //   },
  //   {
  //     id: 2,
  //     name: 'second list',
  //     description: 'get busy!',
  //     tasks: [mockTodoTasks[2], mockTodoTasks[3]],
  //   },
  //   {
  //     id: 3,
  //     name: 'third list',
  //     description: "don't lay around, get out there!",
  //     tasks: [mockTodoTasks[0], mockTodoTasks[3]],
  //   },
  //   {
  //     id: 4,
  //     name: 'fourth list',
  //     description: 'time to feel productive!',
  //     tasks: [mockTodoTasks[0], mockTodoTasks[1], mockTodoTasks[2]],
  //   },
  //   {
  //     id: 5,
  //     name: 'fifth list',
  //     description: 'time to feel productive!',
  //     tasks: [mockTodoTasks[2]],
  //   },
  // ],
  //
  // mockUsers : [
  //   {
  //     id: 1,
  //     email: 'bobby@gmail.com',
  //     todoLists: [mockTodoLists[0], mockTodoLists[4]],
  //   },
  //   {
  //     id: 2,
  //     email: 'ellen@yahoo.com',
  //     todoLists: [mockTodoLists[1]],
  //   },
  //   {
  //     id: 3,
  //     email: 'frank@hotmail.com',
  //     todoLists: [mockTodoLists[2]],
  //   },
  //   {
  //     id: 4,
  //     email: 'janet@federalreserve.gov',
  //     todoLists: [mockTodoLists[3]],
  //   },
  // ],

};
