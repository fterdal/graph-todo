const Sequelize = require('sequelize');
const db = require('../db');
const { models: { todoTask } } = require('../db');

const TodoList = db.define('todoList', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


/**
 * instanceMethods
 */
 // Not sure if we actually need this.
 TodoList.prototype.markAllComplete = async function() {
   const todoTasks = await todoTask.findAll({ where: { todoListId: this.id }})
   return Promise.all(todoTasks.map(async singleTodoTask => {
     await singleTodoTask.update({complete: true})
   }));
 }

/**
 * classMethods
 */


/**
 * hooks
 */


module.exports = TodoList;
