const Sequelize = require("sequelize");
const db = require("../db");

const Ad = db.define("ad", {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  imageUrl: Sequelize.STRING,
  price: Sequelize.INTEGER,
  email: Sequelize.STRING,
  phoneNumber: Sequelize.INTEGER
});

module.exports = Ad;
