const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define("image", {
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
  fullURL: {
    type: Sequelize.STRING,
  },
});

module.exports = { Image };
