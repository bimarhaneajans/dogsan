module.exports = app => {
    const katalog = require("../controllers/katalog.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", katalog.create);
  
     router.get("/", katalog.findAll);
  
     router.get("/published", katalog.findAllPublished);
  
     router.get("/:id", katalog.findOne);
  
     router.put("/:id", katalog.update);
  
     router.delete("/:id", katalog.delete);
  
     router.delete("/", katalog.deleteAll);
  
    app.use("/katalog", router);
  };