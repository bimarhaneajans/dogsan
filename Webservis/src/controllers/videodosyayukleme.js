const MongoClient = require("mongodb").MongoClient;
const dbConfig = require("../config/db.config");
const uploadFile = require("../middlewares/videouploadfile");
const db = require("../models");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
const baseUrl = "http://localhost:3000/resources/static/assets/videos/";
var mongoose = require('mongoose');
var FormData = require('form-data');
var fs = require('fs');
const busboy = require('busboy');

//postman ekle
//'Accept': 'application/json',
//'Content-Type': 'multipart/form-data'
mongoose.connect(dbConfig.url);
var dbs = mongoose.connection;
dbs.on('error', console.log.bind(console, "connection error"));
dbs.once('open', function (callback) {
  console.log("connection basarili");
})

const { check, validationResult } = require('express-validator');

global.__basedir = __dirname;
var saveTo;
var tipi;
const Slider = db.slide;
 
const findAll = (req, res) => {

  const Baslik = req.query.Baslik;
  var condition = Baslik ? { Yil: { $regex: new RegExp(Baslik), $options: "i" } } : {};

  Slider.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bayis."
      });
    });
};
const findOne = (req, res) => {
  const id = req.params.id;

  Slider.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found bayi with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving bayi with id=" + id });
    });
};
const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Slider.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update bayi with id=${id}. Maybe bayi was not found!`
        });
      } else res.send({ message: "bayi was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating bayi with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Slider.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete bayi with id=${id}. Maybe bayi was not found!`
        });
      } else {
        res.send({
          message: "bayi was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete resim with id=" + id
      });
    });
};

const findAllPublished = (req, res) => {
  Slider.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bayis."
      });
    });
};
const deleteAll = (req, res) => {
  Slider.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} bayis were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bayis."
      });
    });
};
const upload = async (req, res) => {
  //var busboy = new Busboy({ headers: req.headers });
  try {
    MongoClient.connect(dbConfig.url, function (err, db) {
      if (err) throw err;
      const body = {}
      let slider=[null];
    if (req.method === 'POST') {

      const bb = busboy({ headers: req.headers })
      
      bb.on('field', (name, val) => {

        let users = [{ [name]: val },]; 
       
         for (var i in users) {
         slider = new Slider({ 
          //  gorsel:  { 
                Baslik: users[i].Baslik ,
                
                Resimicerik:  users[i].Resimicerik ,
                VideoBaslik:  users[i].VideoBaslik ,
                slidetipi:  users[i].slidetipi ,
                published:  users[i].published ,
                url:  saveTo ,
                Veritipi:   tipi ,
                src:  saveTo ,
             // } 
            
          }) 
         }   
        console.log(JSON.stringify(slider));
        slider.save(slider) 
      })  

      bb.on('file', function(fieldname, file, filename, encoding, mimetype) {
       
         saveTo = path.resolve( 'public/resources/static/assets/videos/' + filename.filename);
         tipi= filename.mimeType;  

          saveTodisk = path.resolve( 'public/resources/static/assets/videos/' + filename.filename);
         console.log(saveTodisk)
        
         file.pipe(fs.createWriteStream(saveTodisk)); 
      
      });

      bb.on('close', () => {
        res.writeHead(200, { 'Connection': 'close' });
        res.end(`bağlantı kapatıldı!`);
      });
   
      bb.on('finish', function() {
        res.writeHead(200, { 'Connection': 'close' });
        res.end("işlem tamam!");
      });
      


       return req.pipe(bb);

    }   
  });
  } catch (err) {
    console.log(err) 
  }


};

/* const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/public/resources/static/assets/videos/";
  let JsonObject;

  const Baslik = req.query.ResimBaslik;
  var condition =  Baslik ? { ResimBaslik: { $regex: new RegExp(Baslik), $options: "i" } } : {};

  Slider.findOne(condition)
    .then(data => {
      res.send(data);

      fs.readdir(directoryPath, function (err, files) {
    
        let fileInfos = [];

        files.forEach((file) => {
          fileInfos.push({

            src: baseUrl + file,
            type: path.extname(baseUrl + file),
          });
        });

        JsonObject = JSON.parse(JSON.stringify(fileInfos));
        //console.log(JsonObject)

        res.status(200).send();
      });
    }).catch(err => {
      JSON.stringify(JsonObject)
      res.status(200).send({
        message:
          err.message || "Some error occurred while retrieving ignes."
      });

      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      } 
    })




}; */

const getListFiles = (req, res) => {
  //const id = req.params.id;
  const Baslik = req.query.Baslik;
  var condition = Baslik ? { Baslik: { $regex: new RegExp(Baslik), $options: "i" } } : {};
  Slider.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/public/resources/static/assets/videos/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  findAllPublished,
  findOne,
  update,
  deleteAll,
  findAll,
  upload,
  getListFiles,
  download,
};