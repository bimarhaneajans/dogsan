module.exports = app => {
    const urun = require("../controllers/urun.controller.js");
  
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

     router.post("/", /* upload.single('file'), */  urun.create);
  
     router.get("/", urun.findAll);
  
     router.get("/published", urun.findAllPublished);
  
     router.get("/:id", urun.findOne);
  
     router.put("/:id", urun.update);
  
     router.delete("/:id", urun.delete);
  
     router.delete("/", urun.deleteAll);
  
    app.use("/urun", router);
  }; 