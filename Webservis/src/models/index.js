const dbConfig = require("../config/db.config.js");
const Sequelize = require('sequelize');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model");
db.role = require("./role.model");
db.bayi = require("./bayi.model.js");

db.ROLES = ["user", "admin"];

module.exports = db;