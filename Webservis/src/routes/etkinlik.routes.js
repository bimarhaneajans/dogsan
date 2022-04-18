module.exports = app => {
    const etkinlik = require("../controllers/etkinlik.controller.js");
  
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
  
     router.post("/", etkinlik.create);
  
     router.get("/", etkinlik.findAll);
  
     router.get("/published", etkinlik.findAllPublished);
  
     router.get("/:id", etkinlik.findOne);
  
     router.put("/:id", etkinlik.update);
  
     router.delete("/:id", etkinlik.delete);
  
     router.delete("/", etkinlik.deleteAll);
  
    app.use("/etkinlik", router);
  };