const express = require("express");
const router = express.Router();
const controller = require("../controllers/videodosyayukleme");


module.exports = app => {
  var multer = require('multer');

  /*  var storage = multer.diskStorage({
     destination: (req, file, cb) => {
 
       cb(null, 'videovideos')
     },
     filename: (req, file, cb) => {
       let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
       cb(null, file.fieldname + '-' + Date.now() + ext)
     }
   });
 */
  // var upload = multer({ storage: storage }); 

  router.post("/", controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);
  app.use(express.json({ limit: "5000mb", extended: false }));

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }));
  app.use("/video", router);
};