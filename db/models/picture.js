const Sequelize = require("sequelize");
const db = require("../db");

// const instanceMethods = {
//   toJSON() {
//     const values = Object.assign({}, this.get());

//     return values;
//   },
// };

const Picture = db.define("picture", {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = { Picture };
