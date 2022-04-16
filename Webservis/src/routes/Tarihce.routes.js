module.exports = app => {
    const sosyalsorumluluk = require("../controllers/sosyalsorumluluk.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", sosyalsorumluluk.create);
  
     router.get("/", sosyalsorumluluk.findAll);
  
     router.get("/published", sosyalsorumluluk.findAllPublished);
  
     router.get("/:id", sosyalsorumluluk.findOne);
  
     router.put("/:id", sosyalsorumluluk.update);
  
     router.delete("/:id", sosyalsorumluluk.delete);
  
     router.delete("/", sosyalsorumluluk.deleteAll);
  
    app.use("/sosyalsorumluluk", router);
  }; 