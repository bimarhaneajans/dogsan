module.exports = app => {
  const slider = require("../controllers/slider.controller.js");

  var multer = require('multer');

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {

      cb(null, 'slidervideos')
    },
    filename: (req, file, cb) => {
      let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      cb(null, file.fieldname + '-' + Date.now() + ext)
    }
  });
  var router = require("express").Router();
  var upload = multer({ storage: storage }); 

  // router.post("/", /* upload.single('file'), */  tarihce.create);
  // router.get("/", tarihce.findAll);
   router.get("/", slider.getListFiles);
   router.post("/", slider.uploadFiles);
   router.delete("/:id", slider.delete);
   router.delete("/sliderresimlerisil", slider.tumresimlerisil);
   router.get("/published", slider.findAllPublished);
   router.get("/:id", slider.findOne);
   router.put("/:id", slider.update);
   router.delete("/:id", slider.delete);
 
  app.use("/slider", router);
}; 