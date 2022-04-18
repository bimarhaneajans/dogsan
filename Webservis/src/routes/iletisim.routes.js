module.exports = app => {
    const iletisim = require("../controllers/iletisim.controller.js");
  
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
  
     router.post("/", upload.single('file'),  iletisim.create);
  
     router.get("/", iletisim.findAll);
  
     router.get("/published", iletisim.findAllPublished);
  
     router.get("/:id", iletisim.findOne);
  
     router.put("/:id", iletisim.update);
  
     router.delete("/:id", iletisim.delete);
  
     router.delete("/", iletisim.deleteAll);
  
    app.use("/iletisim", router);
  }; 