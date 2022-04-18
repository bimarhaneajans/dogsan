module.exports = app => {
    const sosyalsorumluluk = require("../controllers/sosyalsorumluluk.controller.js");
  
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
  
     router.post("/", sosyalsorumluluk.create);
  
     router.get("/", sosyalsorumluluk.findAll);
  
     router.get("/published", sosyalsorumluluk.findAllPublished);
  
     router.get("/:id", sosyalsorumluluk.findOne);
  
     router.put("/:id", sosyalsorumluluk.update);
  
     router.delete("/:id", sosyalsorumluluk.delete);
  
     router.delete("/", sosyalsorumluluk.deleteAll);
  
    app.use("/sosyalsorumluluk", router);
  }; 