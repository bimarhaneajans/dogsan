module.exports = app => {
  const tarihce = require("../controllers/tarihce.controller.js");
  const taricedosyayuke = require("../controllers/tarihcedosyayukleme");

  var multer = require('multer');

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {

      cb(null, 'tarihce')
    },
    filename: (req, file, cb) => {
      let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      cb(null, file.fieldname + '-' + Date.now() + ext)
    }
  });
  var router = require("express").Router();
  var upload = multer({ storage: storage }); 

  // // router.post("/", /* upload.single('file'), */  tarihce.create);
  // // router.get("/", tarihce.findAll);
  //  router.get("/tarihceresimler", tarihce.getListFiles);
  //  router.delete("/tarihceresimler/:id", tarihce.delete);
  //  //router.delete("/tarihceresimlerisil", tarihce.tumresimlerisil);
  //  router.post("/tarihceresimleryukle", tarihce.uploadFiles);
  //  router.get("/published", tarihce.findAllPublished);
  //  router.get("/:id", tarihce.findOne);
  //  router.put("/:id", tarihce.update);
  //  router.delete("/:id", tarihce.delete);
  //  router.delete("/", tarihce.deleteAll);

  router.post("/upload", taricedosyayuke.upload);
  router.get("/files", taricedosyayuke.getListFiles);
  router.get("/files/:name", taricedosyayuke.download);

  router.post("/",tarihce.create);
  router.get("/", tarihce.findAll);
  router.get("/published", tarihce.findAllPublished);
  router.get("/:id", tarihce.findOne);
  router.put("/:id", tarihce.update);
  router.delete("/:id", tarihce.delete);
  router.delete("/", tarihce.deleteAll);
  app.use("/tarihce", router);
}; 