const { User } = require("./models/user");
const { Image } = require("./models/image");

const Sequelize = require("sequelize");
const db = require("./db");

User.hasMany(Image);
Image.belongsTo(User);

module.exports = { db, User, Image };
