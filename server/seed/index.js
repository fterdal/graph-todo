const { User, TodoList, TodoTask } = require('../postgres/models');

const mockUsers = require('./mockUsers');
const mockTodoLists = require('./mockTodoLists');
const mockTodoTasks = require('./mockTodoTasks');

const seedUsers = users => {
  return Promise.all(users.map(mockUser => User.create(mockUser)))
}

const seedTodoLists = (users, todoLists) =>
  Promise.all(
    Object.entries(todoLists)
    .map(([ userEmail, lists ]) => {
      const userToAssign = users.find(user => user.email === userEmail);
      return Promise.all(lists.map(async list => {
         return userToAssign.addTodoLists( await TodoList.create(list) );
      }))
    })
  )

const seedTodoTasks = (todoLists, todoTasks) =>
  Promise.all(
    Object.entries(todoTasks)
    .map( ([ listName, tasks ]) => {
      const listToAssign = todoLists.find(list => list.name === listName);
      return Promise.all(tasks.map(async task => {
         listToAssign.addTodoTasks( await TodoTask.create(task) );
      }))
    })
  )

const seed = async () => {
  const createdUsers = await seedUsers(mockUsers);
  const createdTodoLists = await seedTodoLists(createdUsers, mockTodoLists);
  return seedTodoTasks(createdTodoLists, mockTodoTasks)
}

module.exports = seed;
