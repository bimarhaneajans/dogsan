module.exports = app => {
    const TarihceGarleri = require("../controllers/tarihceGarleri.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", TarihceGarleri.create);
  
     router.get("/", TarihceGarleri.findAll);
  
     router.get("/published", TarihceGarleri.findAllPublished);
  
     router.get("/:id", TarihceGarleri.findOne);
  
     router.put("/:id", TarihceGarleri.update);
  
     router.delete("/:id", TarihceGarleri.delete);
  
     router.delete("/", TarihceGarleri.deleteAll);
  
    app.use("/TarihceGarleri", router);
  }; 