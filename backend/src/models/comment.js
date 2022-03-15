const sequelize = require("../database/connection");
const Sequelize = require("sequelize")

const Comment = sequelize.define("comment", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  replyingTo: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  userId: Sequelize.INTEGER(11),
});

module.exports = { Comment };
