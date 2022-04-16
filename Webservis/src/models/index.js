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
db.etkinliks= require("./etkinlik.model.js")(mongoose);
db.hakkimizdas= require("./hakkimizda.model.js")(mongoose);
db.ignes= require("./igne.model.js")(mongoose);
db.iletisims= require("./iletisim.model.js")(mongoose);
db.katalogs= require("./katalog.model.js")(mongoose);
db.mesajs= require("./mesaj.model.js")(mongoose);
db.sehirs= require("./sehir.model.js")(mongoose);
db.sliders= require("./slider.model.js")(mongoose);
db.sosyalsorumluluks= require("./sosyalsorumluluk.model.js")(mongoose);
db.Tarihces= require("./Tarihce.model.js")(mongoose);
db.TarihceGarleris= require("./TarihceGarleri.model.js")(mongoose);
db.Uruns= require("./Urun.model.js")(mongoose);
db.kategoris= require("./kategori.model")(mongoose);

db.ROLES = ["user", "admin"];
module.exports = db;