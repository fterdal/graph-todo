const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/graphtodo', {
    logging: false
  }
);

// TODO: Refactor so that module.exports = new Sequelize(......)
module.exports = db;
