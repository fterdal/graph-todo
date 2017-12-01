module.exports = {
  Query: {
    allTodoTasks: () => {
      return [
        {
          id: 1,
          title: 'hello',
          text: 'this is a task',
          completed: true,
        }
      ]
    }
  }
}
