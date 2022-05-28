const express = require("express");
const router = express.Router();
const controller = require("../controllers/sliderdosyayukleme");
const controllers = require("../controllers/slider.controller");
  

module.exports = app => { 
    var multer = require('multer');

   /*  var storage = multer.diskStorage({
      destination: (req, file, cb) => {
  
        cb(null, 'slidervideos')
      },
      filename: (req, file, cb) => {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, file.fieldname + '-' + Date.now() + ext)
      }
    });
  */
   // var upload = multer({ storage: storage }); 


    router.post("/", controller.upload);
    router.get("/files", controller.getListFiles);
    router.get("/files/:name", controller.download);

    router.post("/veri", controllers.create);   
    router.get("/veri/", controllers.findAll);
    router.get("/veri/published", controllers.findAllPublished);
    router.get("/veri/:id", controllers.findOne);
    router.put("/veri/:id", controllers.update);
    router.delete("/veri/:id", controllers.delete);
    router.delete("/veri", controllers.deleteAll);
  
    app.use("/slider", router);
  };