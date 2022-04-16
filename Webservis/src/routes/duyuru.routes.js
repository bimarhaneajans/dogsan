module.exports = app => {
    const duyuru = require("../controllers/duyuru.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", duyuru.create);
  
     router.get("/", duyuru.findAll);
  
     router.get("/published", duyuru.findAllPublished);
  
     router.get("/:id", duyuru.findOne);
  
     router.put("/:id", duyuru.update);
  
     router.delete("/:id", duyuru.delete);
  
     router.delete("/", duyuru.deleteAll);
  
    app.use("/duyuru", router);
  };