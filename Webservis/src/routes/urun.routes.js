module.exports = app => {
    const urun = require("../controllers/urun.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", urun.create);
  
     router.get("/", urun.findAll);
  
     router.get("/published", urun.findAllPublished);
  
     router.get("/:id", urun.findOne);
  
     router.put("/:id", urun.update);
  
     router.delete("/:id", urun.delete);
  
     router.delete("/", urun.deleteAll);
  
    app.use("/urun", router);
  }; 