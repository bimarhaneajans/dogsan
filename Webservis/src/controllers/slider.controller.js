const db = require("../models");
const upload = require("../middlewares/tarihceupload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const url = dbConfig.url;
const Tarihce = db.Tarihces;
const mongoClient = new MongoClient(url);
const baseUrl = "http://localhost:3000/slider/files/";

exports.create = async (req, res) => {
/*   if (!req.body.Yil) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  const tarihce = new Tarihce({
    Yil: req.body.Yil,
    icerik: req.body.icerik,
    Resimbaslik: req.body.Resimbaslik,
    Resim: req.body.Resim,
    published: req.body.published ? req.body.published : false
  });  
   //console.log(req.files);

   /* Object.entries(req.files).forEach(entry => { 

    tarihce.Resimcoklu = [key, value]= entry 
    
  }); */
  /*  */
// console.log(tarihce.Resimcoklu);

  /* if (req.files.length <= 0) {
    return res
      .status(400)
      .send({ message: "You must select at least 1 file." });
  }

  return res.status(200).send({
    message: "Files have been uploaded.",
  }),  */
    tarihce.save(tarihce).then(data => {
      /*  Object.entries(req.files).forEach(entry => { 

        tarihce.Resimcoklu = [key, value]= entry 
        
      }); */

      res.send(data); 
      

    })
      .catch(err => {
        console.log(err);

        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          return res.status(400).send({
            message: "Too many files to upload.",
          });
        }
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tarihce."
        });
      });
}; 
exports.findAll = (req, res) => {
  const Yil = req.query.Yil;
  var condition = Yil ? { Yil: { $regex: new RegExp(Yil), $options: "i" } } : {};

  Tarihce.find(condition)
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
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tarihce.findById(id)
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
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Tarihce.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  Tarihce.findByIdAndRemove(id, { useFindAndModify: false })
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
exports.findAllPublished = (req, res) => {
  Tarihce.find({ published: true })
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
exports.deleteAll = (req, res) => {
  Bayi.deleteMany({})
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