module.exports = app => {
    const igne = require("../controllers/igne.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", igne.create);
  
     router.get("/", igne.findAll);
  
     router.get("/published", igne.findAllPublished);
  
     router.get("/:id", igne.findOne);
  
     router.put("/:id", igne.update);
  
     router.delete("/:id", igne.delete);
  
     router.delete("/", igne.deleteAll);
  
    app.use("/igne", router);
  }; 