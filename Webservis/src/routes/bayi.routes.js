module.exports = app => {
    const bayi = require("../controllers/bayi.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", bayi.create);
  
     router.get("/", bayi.findAll);
  
     router.get("/published", bayi.findAllPublished);
  
     router.get("/:id", bayi.findOne);
  
     router.put("/:id", bayi.update);
  
     router.delete("/:id", bayi.delete);
  
     router.delete("/", bayi.deleteAll);
  
    app.use("/bayi", router);
  };