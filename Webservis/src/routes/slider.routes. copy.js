module.exports = app => {
    const slider = require("../controllers/slider.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", slider.create);
  
     router.get("/", slider.findAll);
  
     router.get("/published", slider.findAllPublished);
  
     router.get("/:id", slider.findOne);
  
     router.put("/:id", slider.update);
  
     router.delete("/:id", slider.delete);
  
     router.delete("/", slider.deleteAll);
  
    app.use("/slider", router);
  };