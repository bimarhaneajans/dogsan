module.exports = app => {
    const blog = require("../controllers/blog.controller.js");
  
    var router = require("express").Router();
  
     router.post("/", blog.create);
  
     router.get("/", blog.findAll);
  
     router.get("/published", blog.findAllPublished);
  
     router.get("/:id", blog.findOne);
  
     router.put("/:id", blog.update);
  
     router.delete("/:id", blog.delete);
  
     router.delete("/", blog.deleteAll);
  
    app.use("/blog", router);
  };