const { User, TodoList } = require('../postgres/models');

const mockUsers = require('./mockUsers');
const mockTodoLists = require('./mockTodoLists');
const mockTodoTasks = {/* To Do: Make these */}

const seedUsers = users => {
  return Promise.all(users.map(mockUser => User.create(mockUser)))
}

const seedTodoLists = (users, todoLists) =>
  Promise.all(
    Object.entries(todoLists)
    .map( ([ userEmail, lists ]) => {
      const userToAssign = users.find(user => user.email === userEmail);
      return Promise.all(lists.map(async list => {
         userToAssign.addTodoLists( await TodoList.create(list) );
      }))
    })
  )

const seedTodoTasks = (todoLists, todoTasks) => {

}

const seed = async () => {
  const createdUsers = await seedUsers(mockUsers);
  const createdTodoLists = await seedTodoLists(createdUsers, mockTodoLists);
  return seedTodoTasks(createdTodoLists, mockTodoTasks)
}

module.exports = seed;
