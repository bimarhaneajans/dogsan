module.exports = app => {
    const blog = require("../controllers/blog.controller.js");
    
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

     router.post("/", upload.single('file'),  blog.create);
  
     router.get("/", blog.findAll);
  
     router.get("/published", blog.findAllPublished);
  
     router.get("/:id", blog.findOne);
  
     router.put("/:id", blog.update);
  
     router.delete("/:id", blog.delete);
  
     router.delete("/", blog.deleteAll);
  
    app.use("/blog", router);
  };