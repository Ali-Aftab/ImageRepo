const { User } = require("./models/user");
const { Picture } = require("./models/picture");

const Sequelize = require("sequelize");
const db = require("./db");

User.hasMany(Picture);
Picture.belongsTo(User);

module.exports = { db, User, Picture };
