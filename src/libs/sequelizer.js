const { config } = require("../config/config");
const setUpModels = require("./../database/models");
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "mysql",
  }
);

sequelize.sync();
setUpModels(sequelize);

module.exports = sequelize;