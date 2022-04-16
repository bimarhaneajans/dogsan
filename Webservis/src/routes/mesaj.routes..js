module.exports = app => {
    const mesaj = require("../controllers/mesaj.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", mesaj.create);
     router.get("/", mesaj.findAll);
     router.get("/published", mesaj.findAllPublished);
     router.get("/:id", mesaj.findOne);
     router.put("/:id", mesaj.update);
     router.delete("/:id", mesaj.delete);
     router.delete("/", mesaj.deleteAll);
    app.use("/mesaj", router);
  };