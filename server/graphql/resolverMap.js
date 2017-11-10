const resolverMap = {
  TodoTaskById: id => {
    return {
      id: '1',
      title: 'groceries',
      text: 'get milk, eggs, and bear traps',
      completed: false,
    }
  }
};

module.exports = resolverMap;
