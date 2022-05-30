
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


mongoose.connect(dbConfig.url);
var dbs = mongoose.connection;
dbs.on('error', console.log.bind(console, "connection error"));
dbs.once('open', function (callback) {
  console.log("connection basarili");
})

const { check, validationResult } = require('express-validator');



const Slider = db.slide;

const findAll = (req, res) => {

  const ResimBaslik = req.query.ResimBaslik;
  var condition = ResimBaslik ? { Yil: { $regex: new RegExp(ResimBaslik), $options: "i" } } : {};

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
  MongoClient.connect(dbConfig.url, function (err, db) {
    if (err) throw err;
    const body = {}
    try {
      if (req.method === 'POST') {
        const bb = busboy({ headers: req.headers })
        bb.on('field', (name, val, mimetype) => {
          var dbo = db.db("dogsandb");
          body[name] = name;
          body[val] = val;

          //  console.log(`${name} %j`, val); 

         
          /* const slider = new Slider(
          { 
            [name]:name,[val]:val,
          });
            console.log(slider) */

            const slider = new Slider({
              
            })


          //console.log(JSON.stringify(newData))
          //slider.save(slider)



          // newData.push({[name] : val})

          // console.log(newData)   



           /* dbo.collection("slider").insertMany(slider, function(err, res) {
            if (err) throw err;
          //   db.close();
          });  */  

          /*
          [ { ResimBaslik: 'ResimBaslikvalue' } ]
[ { Resimicerik: 'Resimicerikvalue' } ]
[ { VideoBaslik: 'VideoBaslikvalue' } ]
[ { Videopath: 'Videopathvalue' } ]
[ { Veritipi: 'asdasdasdasdasdvalue' } ]
          */


          /* datalarim = JSON.parse(newData);
            dbo.collection("slider").insertMany(newData, function (err, res) {
              if (err) throw err;
              db.close();
            });  */





          // key = name;
          //value = val;  
          /* console.log(fieldname)*/
          //console.log(key) 
          // console.log(value)  
          //body[name] = name;
          //body[val] = val;

          /*   const data = body[name]+":"+''+body[val]; 
            console.log(data)   
            
            
            var dbo = db.db("dogsandb");
              dbo.collection("slider").insertMany(data, function(err, res) {
               if (err) throw err;
                db.close();
             });   */




        })




        req.pipe(bb)

      }






      uploadFile(req, res)

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
        message: `Could not upload the file:. ${err}`,
      });
    }

  });
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/public/resources/static/assets/videos/";
  let JsonObject;

  const ResimBaslik = req.query.ResimBaslik;
  var condition = ResimBaslik ? { ResimBaslik: { $regex: new RegExp(ResimBaslik), $options: "i" } } : {};

  Slider.find(condition)
    .then(data => {
      res.send(data);

      fs.readdir(directoryPath, function (err, files) {
        if (err) {
          res.status(500).send({
            message: "Unable to scan files!",
          });
        }

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
    })




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
