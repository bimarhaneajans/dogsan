const dbConfig = require("../config/db.config.js");
const Sequelize = require('sequelize');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model");
db.role = require("./role.model");
db.bayis = require("./bayi.model.js")(mongoose);
db.blogs = require("./blog.model.js")(mongoose);
db.degers = require("./deger.model.js")(mongoose); 
 db.etkinliks = require("./etkinlik.model.js")(mongoose);
db.hakkimizdas = require("./hakkimizda.model.js")(mongoose);
db.duyurus = require("./duyuru.model.js")(mongoose);
 
db.ROLES = ["user", "admin"]; 
module.exports = db;