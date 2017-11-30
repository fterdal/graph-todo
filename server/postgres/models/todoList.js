const Sequelize = require('sequelize');
const db = require('../db');

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


/**
 * classMethods
 */


/**
 * hooks
 */


module.exports = TodoList;
