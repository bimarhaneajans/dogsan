module.exports = app => {
    const slider = require("../controllers/slider.controller.js");
  
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

     router.post("/", upload.single('file'),  slider.create);
  
     router.get("/", slider.findAll);
  
     router.get("/published", slider.findAllPublished);
  
     router.get("/:id", slider.findOne);
  
     router.put("/:id", slider.update);
  
     router.delete("/:id", slider.delete);
  
     router.delete("/", slider.deleteAll);
  
    app.use("/slider", router);
  }; 