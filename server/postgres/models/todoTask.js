const Sequelize = require('sequelize');
const db = require('../db');

const TodoTask = db.define('todoTask', {
  title: {
    type: Sequelize.STRING,
  },
  text: {
    type: Sequelize.STRING,
  },
  completed: {
    type: Sequelize.BOOLEAN,
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


module.exports = TodoTask;
