const { User, TodoList } = require('../postgres/models');

const mockUsers = require('./mockUsers');
const mockTodoLists = require('./mockTodoLists');

const seedUsers = () => {
  return Promise.all(mockUsers.map(mockUser => User.create(mockUser)))
  // return users;
}

const seedTodoLists = users => {

}

const seed = async () => {
  try {
    const todoLists = Object.keys(mockTodoLists).map(userEmail => {
      try {
        const userToAssign = users.find(user => user.email === userEmail);
        const todoListsToAssign = Promise.all(mockTodoLists[userEmail].map(async todoList => {
          try {
            return userToAssign.addTodoList( await TodoList.create(todoList));
          } catch(err) {
            console.error(err)
          }
        }))
        return Promise.all(todoListsToAssign);
      } catch(err) {
        console.error(err)
      }
    })
    console.log('~~~~~ ABOUT TO FINISH SEEDING ~~~~~');
    return todoLists;
  } catch(err) {
    console.error(err)
  }
}

module.exports = seed;
