module.exports = app => {
    const hakkimizda = require("../controllers/hakkimizda.controller.js");
  
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

     router.post("/", upload.single('file'),  hakkimizda.create);
  
     router.get("/", hakkimizda.findAll);
  
     router.get("/published", hakkimizda.findAllPublished);
  
     router.get("/:id", hakkimizda.findOne);
  
     router.put("/:id", hakkimizda.update);
  
     router.delete("/:id", hakkimizda.delete);
  
     router.delete("/", hakkimizda.deleteAll);
  
    app.use("/hakkimizda", router);
  };