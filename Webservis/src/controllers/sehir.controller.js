const db = require("../models");
const upload = require("../middlewares/upload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
const Sehir = db.sehirs;

exports.create = (req, res) => {
  if (!req.body.sehirAdi) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const sehir = new Sehir({ 
    sehirAdi: req.body.sehirAdi,
    published: req.body.published ? req.body.published : false
  });
  var file = fs.readFileSync(path.normalize(req.file.path));
  var contenttype=mime.getType(path.normalize(req.file.path));
  sehir.img = {
    data: file,
    contentType: contenttype     
  }
  sehir
    .save(sehir)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the slider."
      });
    });
};

exports.findAll = (req, res) => {
  const sehirAdi = req.query.sehirAdi; 
  var condition = sehirAdi ? { ismi: { $regex: new RegExp(sehirAdi), $options: "i" } } : {};

  Sehir.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sliders."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Sehir.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found slider with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving slider with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Sehir.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update slider with id=${id}. Maybe slider was not found!`
        });
      } else res.send({ message: "slider was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating slider with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Sehir.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete slider with id=${id}. Maybe slider was not found!`
        });
      } else {
        res.send({
          message: "slider was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete slider with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Sehir.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} sliders were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all sliders."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Sehir.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sliders."
      });
    });
};