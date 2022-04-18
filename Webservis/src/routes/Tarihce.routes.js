module.exports = app => {
    const tarihce = require("../controllers/tarihce.controller.js");
  
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
  
     router.post("/", upload.single('file'),  tarihce.create);
  
     router.get("/", tarihce.findAll);
  
     router.get("/published", tarihce.findAllPublished);
  
     router.get("/:id", tarihce.findOne);
  
     router.put("/:id", tarihce.update);
  
     router.delete("/:id", tarihce.delete);
  
     router.delete("/", tarihce.deleteAll);
  
    app.use("/tarihce", router);
  }; 