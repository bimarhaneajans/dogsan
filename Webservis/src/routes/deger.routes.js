module.exports = app => {
    const deger = require("../controllers/deger.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", deger.create);
  
     router.get("/", deger.findAll);
  
     router.get("/published", deger.findAllPublished);
  
     router.get("/:id", deger.findOne);
  
     router.put("/:id", deger.update);
  
     router.delete("/:id", deger.delete);
  
     router.delete("/", deger.deleteAll);
  
    app.use("/deger", router);
  };