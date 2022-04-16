module.exports = app => {
    const iletisim = require("../controllers/iletisim.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", iletisim.create);
  
     router.get("/", iletisim.findAll);
  
     router.get("/published", iletisim.findAllPublished);
  
     router.get("/:id", iletisim.findOne);
  
     router.put("/:id", iletisim.update);
  
     router.delete("/:id", iletisim.delete);
  
     router.delete("/", iletisim.deleteAll);
  
    app.use("/iletisim", router);
  }; 