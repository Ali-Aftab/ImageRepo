const Sequelize = require("sequelize");
const db = require("../db");

const Picture = db.define("picture", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = { Picture };
