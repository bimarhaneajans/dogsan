module.exports = app => {
    const sehir = require("../controllers/sehir.controller.js");
  
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

     router.post("/", upload.single('file'),  sehir.create);
  
     router.get("/", sehir.findAll);
  
     router.get("/published", sehir.findAllPublished);
  
     router.get("/:id", sehir.findOne);
  
     router.put("/:id", sehir.update);
  
     router.delete("/:id", sehir.delete);
  
     router.delete("/", sehir.deleteAll);
  
    app.use("/sehir", router);
  }; 