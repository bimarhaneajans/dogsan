 
const dbConfig = require("../config/db.config");
const db = require("../models");

const uploadFile = require("../middlewares/tarihigaleriupload");
const fs = require("fs");
 const baseUrl = "https://bavrim.madilink.net/resources/static/assets/tarihcegaleri/";
 
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const url = dbConfig.url;
const mongoClient = new MongoClient(url);
const path = require("path");
const Tarihce = db.sliders;

const upload = async (req, res) => {
/* 
  const tarihce = new Tarihce({
    Yil: req.body.Yil,
    icerik: req.body.icerik,
    Resimbaslik: req.body.Resimbaslik,
    Resim: req.body.Resim,
    published: req.body.published ? req.body.published : false
  })  
  tarihce.save(tarihce);
  console.log(tarihce)
    
  */

  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " 
    });
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/public/resources/static/assets/tarihcegaleri/";
  let JsonObject;
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }


    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        image: baseUrl + file,
        caption: file,
      });
    });

    JsonObject = JSON.parse(JSON.stringify(fileInfos));
//console.log(JsonObject)
    res.status(200).send(JSON.stringify(JsonObject));
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/public/resources/static/assets/tarihcegaleri/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};





module.exports = {
  upload,
  getListFiles,
  download,
};
