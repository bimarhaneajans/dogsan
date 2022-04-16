module.exports = app => {
    const sehir = require("../controllers/sehir.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", sehir.create);
  
     router.get("/", sehir.findAll);
  
     router.get("/published", sehir.findAllPublished);
  
     router.get("/:id", sehir.findOne);
  
     router.put("/:id", sehir.update);
  
     router.delete("/:id", sehir.delete);
  
     router.delete("/", sehir.deleteAll);
  
    app.use("/sehir", router);
  }; 