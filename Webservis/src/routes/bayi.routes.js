module.exports = app => {
  const bayi = require("../controllers/bayi.controller.js");

  var router = require("express").Router();

  var multer = require('multer');

  var storage = multer.diskStorage({
    destination: (req, file, cb) => {

      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      cb(null, file.fieldname + '-' + Date.now() + ext)
    }
  });

  var upload = multer({ storage: storage });
  router.post("/", upload.single('file'), bayi.create);

/*   router.post("/", bayi.uploadFiles);
 */     router.get("/", bayi.findAll);

  router.get("/published", bayi.findAllPublished);

  router.get("/:id", bayi.findOne);

  router.put("/:id", bayi.update);

  router.delete("/:id", bayi.delete);

  router.delete("/", bayi.deleteAll);

  app.use("/bayi", router);
};