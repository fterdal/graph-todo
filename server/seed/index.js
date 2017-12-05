const { User, TodoList } = require('../postgres/models');

const mockUsers = require('./mockUsers');
const mockTodoLists = require('./mockTodoLists');

const seed = async () => {
  const users = await Promise.all(mockUsers.map(mockUser => {
    return User.create(mockUser);
  }));
  const todoLists = Object.keys(mockTodoLists).map(async userEmail => {
    const userToAssign = users.find(user => user.email === userEmail);
    console.log('userEmail', userEmail);
    const todoListsToAssign = Promise.all(mockTodoLists[userEmail].map(todoList => {
      return userToAssign.addTodoList(todoList);
      // return userToAssign.addTodoList({name: 'some name', description: 'some description'});
    }))
    console.log('todoListsToAssign', todoListsToAssign);
    return Promise.all(todoListsToAssign);
  })
  return todoLists;
}

module.exports = seed;
