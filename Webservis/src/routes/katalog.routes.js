module.exports = app => {
    const katalog = require("../controllers/katalog.controller.js");
  
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
  
     router.post("/", upload.single('file'),  katalog.create);
  
     router.get("/", katalog.findAll);
  
     router.get("/published", katalog.findAllPublished);
  
     router.get("/:id", katalog.findOne);
  
     router.put("/:id", katalog.update);
  
     router.delete("/:id", katalog.delete);
  
     router.delete("/", katalog.deleteAll);
  
    app.use("/katalog", router);
  };