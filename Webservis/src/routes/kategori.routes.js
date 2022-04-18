module.exports = app => {
  const kategori = require("../controllers/kategori.controller.js");

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

  router.post("/", upload.single('file'),  kategori.create);
  router.get("/", kategori.findAll);
  router.get("/published", kategori.findAllPublished);
  router.get("/:id", kategori.findOne);
  router.put("/:id", kategori.update);
  router.delete("/:id", kategori.delete);
  router.delete("/", kategori.deleteAll);
  app.use("/kategori", router);
};