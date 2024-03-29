const { TodoList, TodoTask } = require('../../postgres/models');

// Confirms that the user is logged in
const userIsLoggedIn = (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized');
  }
}

// Confirms that the user is an admin
const userIsAdmin = (req, res) => {
  userIsLoggedIn(req, res);
  if (!req.user.isAdmin)  {
    res.status(403);
    throw new Error('Forbidden');
  }
}

// Confirms that the user (stored in req.user) can edit the todoList which
// corresponds to todoListId. If so, returns that todoList.
const userCanEditTodoList = async (req, res, todoListId) => {
  userIsLoggedIn(req, res);
  const todoList = await TodoList.findById(todoListId);
  if (!todoList) {
    res.status(404);
    throw new Error('Not Found');
  }
  if (!req.user.canEditTodoList(todoList)) {
    res.status(403);
    throw new Error('Forbidden');
  }
  return todoList;
}

// Confirms that the user (stored in req.user) can edit the todoTask which
// corresponds to todoTaskId. If so, this returns that todoTask.
const userCanEditTodoTask = async (req, res, todoTaskId) => {
  userIsLoggedIn(req, res);
  const todoTask = await TodoTask.findById(todoTaskId);
  if (!todoTask) {
    res.status(404);
    throw new Error('Not Found');
  }
  if (await userCanEditTodoList(req, res, todoTask.todoListId)) return todoTask;
}

module.exports = {
  userIsLoggedIn,
  userIsAdmin,
  userCanEditTodoList,
  userCanEditTodoTask,
}
