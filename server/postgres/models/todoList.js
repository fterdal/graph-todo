const Sequelize = require('sequelize');
const db = require('../db');
const { models: { todoTask } } = require('../db');

// const models = require('../models');
// console.log('db.models.todoTask', db.models.todoTask);
// console.log('todoTask', todoTask);

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
 TodoList.prototype.markAllComplete = async function() {
   const todoTasks = await todoTask.findAll({ where: { todoListId: this.id }})
   console.log('todoTasks', todoTasks);
   return Promise.all(todoTasks.map(async singleTodoTask => {
     await singleTodoTask.update({complete: true})
   }));
 }

 TodoList.prototype.markAllUncomplete = function() {

 }


/**
 * classMethods
 */


/**
 * hooks
 */


module.exports = TodoList;
