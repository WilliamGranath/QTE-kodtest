const Sequelize = require("sequelize");

Sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(25),
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
});
