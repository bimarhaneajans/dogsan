module.exports = app => {
    const bayis = require("../controllers/bayi.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", bayis.create);
  
     router.get("/", bayis.findAll);
  
     router.get("/published", bayis.findAllPublished);
  
     router.get("/:id", bayis.findOne);
  
     router.put("/:id", bayis.update);
  
     router.delete("/:id", bayis.delete);
  
     router.delete("/", bayis.deleteAll);
  
    app.use("/api/bayi", router);
  };