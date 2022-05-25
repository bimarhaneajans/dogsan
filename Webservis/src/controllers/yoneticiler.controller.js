const db = require("../models");
const upload = require("../middlewares/upload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
const path = require('path');

var mime = require('mime');
const Yoneticiler = db.yoneticilers;
 

exports.create = (req, res) => { 
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  let yoneticiler = new Yoneticiler({
    yoneticiadi: req.body.yoneticiadi,
    yoneticisoyadi: req.body.yoneticisoyadi,
    kariyer: req.body.kariyer,
    pozizyon: req.body.pozizyon,
    twitter: req.body.twitter,
    facebook:req.body.facebook,
    linkedin:req.body.linkedin,
    googleplus:req.body.googleplus,
    kisaozgecmis:req.body.kisaozgecmis,
    Resim: req.body.Resim,
    published: req.body.published ? req.body.published : false,

  }); 
 
  /*   var file = fs.readFileSync(path.normalize(req.file.path));
    var contenttype=mime.getType(path.normalize(req.file.path));
    
    bayi.img = {
      data: file,
      contentType: contenttype     
    } */
  

    yoneticiler
    .save(yoneticiler)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the bayi."
      });
    });
};

exports.findAll = (req, res) => {
  const yoneticiadi = req.query.yoneticiadi;
  var condition = yoneticiadi ? { yoneticiadi: { $regex: new RegExp(yoneticiadi), $options: "i" } } : {};

  Yoneticiler.find(condition)
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

  Yoneticiler.findById(id)
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

  Yoneticiler.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  Yoneticiler.findByIdAndRemove(id, { useFindAndModify: false })
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
        message: "Could not delete bayi with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Yoneticiler.deleteMany({})
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

exports.findAllPublished = (req, res) => {
  Yoneticiler.find({ published: true })
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