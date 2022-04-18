module.exports = app => {
    const TarihceGarleri = require("../controllers/tarihceGarleri.controller.js");
  
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

     router.post("/", upload.single('file'),  TarihceGarleri.create);
  
     router.get("/", TarihceGarleri.findAll);
  
     router.get("/published", TarihceGarleri.findAllPublished);
  
     router.get("/:id", TarihceGarleri.findOne);
  
     router.put("/:id", TarihceGarleri.update);
  
     router.delete("/:id", TarihceGarleri.delete);
  
     router.delete("/", TarihceGarleri.deleteAll);
  
    app.use("/TarihceGarleri", router);
  }; 