const Sequelize = require("sequelize");
const db = require("../db");

const Picture = db.define("picture", {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  type: {
    type: Sequelize.STRING,
  },
  url: {
    type: Sequelize.STRING,
  },
});

module.exports = { Picture };
