const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/db.config");

var storage = new GridFsStorage({
  url: dbConfig.url + dbConfig.database,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
   /*  const match = ["image/png", "image/jpeg","video/mp4"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-dogsan-${file.originalname}`;
      return filename;
    } */

    return {
      bucketName: dbConfig.imgBucket,
      filename: `${Date.now()}-dogsan-${file.originalname}`
    };
  }
});

var uploadFiles = multer({ storage: storage }).array("file", 10);
// var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
