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

  completeTask({id}) {
    mockTodoTasks[id].completed = !mockTodoTasks[id].completed
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
  addUser({email, todoLists = []}) {
    const id = largestId(mockUsers) + 1;
    mockUsers[id] = {id, email, todoLists};
  },

  userById({id}) {
    return mockUsers[id]
  },

  listUsers() {
    return getData(mockUsers);
  },

};
