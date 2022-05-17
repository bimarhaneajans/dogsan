module.exports = app => {
  const kariyer = require("../controllers/kariyer.controller");

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
  router.post("/", kariyer.create);  /* upload.single('file'), */
  router.get("/", kariyer.findAll);
  router.get("/published", kariyer.findAllPublished);
  router.get("/:id", kariyer.findOne);
  router.put("/:id", kariyer.update);/*  */
  router.delete("/:id", kariyer.delete);
  router.delete("/", kariyer.deleteAll);
  app.use("/kariyer", router);
};