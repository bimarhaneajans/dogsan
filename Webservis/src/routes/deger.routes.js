module.exports = app => {
    const deger = require("../controllers/deger.controller.js");
  
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

     router.post("/", /* upload.single('file'), */  deger.create);
  
     router.get("/", deger.findAll);
  
     router.get("/published", deger.findAllPublished);
  
     router.get("/:id", deger.findOne);
  
     router.put("/:id", deger.update);
  
     router.delete("/:id", deger.delete);
  
     router.delete("/", deger.deleteAll);
  
    app.use("/deger", router);
  };