module.exports = app => {
    const tarihce = require("../controllers/tarihce.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", tarihce.create);
  
     router.get("/", tarihce.findAll);
  
     router.get("/published", tarihce.findAllPublished);
  
     router.get("/:id", tarihce.findOne);
  
     router.put("/:id", tarihce.update);
  
     router.delete("/:id", tarihce.delete);
  
     router.delete("/", tarihce.deleteAll);
  
    app.use("/tarihce", router);
  }; 