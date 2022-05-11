module.exports = app => {
  const yoneticiler = require("../controllers/yoneticiler.controller.js");

  var router = require("express").Router();

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

  var upload = multer({ storage: storage }); 
  router.post("/", yoneticiler.create);  /* upload.single('file'), */
  router.get("/", yoneticiler.findAll);
  router.get("/published", yoneticiler.findAllPublished);
  router.get("/:id", yoneticiler.findOne);
  router.put("/:id", yoneticiler.update);
  router.delete("/:id", yoneticiler.delete);
  router.delete("/", yoneticiler.deleteAll);
  app.use("/yoneticiler", router);
};