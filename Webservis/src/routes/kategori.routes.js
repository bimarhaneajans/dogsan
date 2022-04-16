module.exports = app => {
  const kategori = require("../controllers/kategori.controller.js");

  var router = require("express").Router();

  router.post("/", kategori.create);
  router.get("/", kategori.findAll);
  router.get("/published", kategori.findAllPublished);
  router.get("/:id", kategori.findOne);
  router.put("/:id", kategori.update);
  router.delete("/:id", kategori.delete);
  router.delete("/", kategori.deleteAll);
  app.use("/kategori", router);
};