module.exports = app => {
    const mesaj = require("../controllers/mesaj.controller.js");
  
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

     router.post("/", upload.single('file'),  mesaj.create);
     router.get("/", mesaj.findAll);
     router.get("/published", mesaj.findAllPublished);
     router.get("/:id", mesaj.findOne);
     router.put("/:id", mesaj.update);
     router.delete("/:id", mesaj.delete);
     router.delete("/", mesaj.deleteAll);
    app.use("/mesaj", router);
  };