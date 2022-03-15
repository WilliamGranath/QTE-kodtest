const Sequelize = require("sequelize");

const sequelize = new Sequelize("comments", "root", "root1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
global.sequelize = sequelize;
