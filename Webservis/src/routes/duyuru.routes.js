module.exports = app => {
    const duyuru = require("../controllers/duyuru.controller.js");
  
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
  
     router.post("/", duyuru.create);
  
     router.get("/", duyuru.findAll);
  
     router.get("/published", duyuru.findAllPublished);
  
     router.get("/:id", duyuru.findOne);
  
     router.put("/:id", duyuru.update);
  
     router.delete("/:id", duyuru.delete);
  
     router.delete("/", duyuru.deleteAll);
  
    app.use("/duyuru", router);
  };