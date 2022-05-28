const db = require("../models");
 const dbConfig = require("../config/db.config");
var multer = require('multer');
const uploadFile = require("../middlewares/slideruploadfile");
var fs = require('fs');
var path = require('path');
var mime = require('mime');
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const url = dbConfig.url;
const Sliders = db.sliders;
const mongoClient = new MongoClient(url); 

exports.create = async (req, res) => {
   if (!req.body.ResimBaslik) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 

  const slider = new Sliders({

    ResimBaslik:req.body.ResimBaslik , 
    Resimpath:req.body.Resimpath ,
    Resimicerik:req.body.Resimicerik ,
    VideoBaslik:req.body.VideoBaslik ,
    Videopath:req.body.Videopath,
    Veritipi:req.body.Veritipi,
    //published: 
   
    //published: req.body.published ? req.body.published : false
  });  
    
  slider.save(slider).then(data => { 
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
            err.message || "Some error occurred while creating the Sliders."
        });
      });
}; 
exports.findAll = (req, res) => {
  const Veritipi = req.query.Veritipi;
  var condition = Veritipi ? { Veritipi: { $regex: new RegExp(Veritipi), $options: "i" } } : {};

  Sliders.find(condition)
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

  Sliders.findById(id)
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

  Sliders.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  Sliders.findByIdAndRemove(id, { useFindAndModify: false })
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
  Sliders.find({ published: true })
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
  Sliders.deleteMany({})
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