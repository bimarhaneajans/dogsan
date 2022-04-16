module.exports = app => {
    const hakkimizda = require("../controllers/hakkimizda.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", hakkimizda.create);
  
     router.get("/", hakkimizda.findAll);
  
     router.get("/published", hakkimizda.findAllPublished);
  
     router.get("/:id", hakkimizda.findOne);
  
     router.put("/:id", hakkimizda.update);
  
     router.delete("/:id", hakkimizda.delete);
  
     router.delete("/", hakkimizda.deleteAll);
  
    app.use("/hakkimizda", router);
  };