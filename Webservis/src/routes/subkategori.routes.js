module.exports = app => {
  const subkategori = require("../controllers/subkategori.controller.js");

  var multer = require('multer');

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {

      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      cb(null, file.fieldname + '-' + Date.now() + ext)
    }
  });
  var router = require("express").Router();
  var upload = multer({ storage: storage }); 

  router.post("/", /* upload.single('file'), */  subkategori.create);
  router.get("/", subkategori.findAll);
  router.get("/published", subkategori.findAllPublished);
  router.get("/:kategoriid", subkategori.findOne);
  router.get("/findone/:id", subkategori.SubfindOne);
  router.put("/:id", subkategori.update);
  router.delete("/:id", subkategori.delete);
  router.delete("/", subkategori.deleteAll);
  app.use("/subkategori", router);
};