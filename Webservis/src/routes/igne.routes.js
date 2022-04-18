module.exports = app => {
    const igne = require("../controllers/igne.controller.js");
  
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

     router.post("/", upload.single('file'),  igne.create);
  
     router.get("/", igne.findAll);
  
     router.get("/published", igne.findAllPublished);
  
     router.get("/:id", igne.findOne);
  
     router.put("/:id", igne.update);
  
     router.delete("/:id", igne.delete);
  
     router.delete("/", igne.deleteAll);
  
    app.use("/igne", router);
  }; 