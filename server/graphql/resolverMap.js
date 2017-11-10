const {
  mockUsers,
  mockTodoTasks,
} = require('./mocks');

const todoResolvers = {
  TodoTaskById: ({ id }) => {
    return mockTodoTasks.find(task => {
      return task.id === id;
    })
  },
  AllTodoTasks: () => {
    return mockTodoTasks
  },
}


const userResolvers = {
  UserById: ({ id }) => {
    return mockUsers.find(user => {
      return user.id === id;
    })
  },
  AllUsers: () => {
    return mockUsers
  },
}

module.exports = {
  ...todoResolvers,
  ...userResolvers,
};
