const db = require("../models");
const upload = require("../middlewares/upload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
const Kategori = db.kategoris;

exports.create = (req, res) => {
  if (!req.body.adi) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const kategori = new Kategori({
    adi: req.body.adi,
    uzunisim: req.body.uzunisim,
    bolumrenkkodu: req.body.bolumrenkkodu,
    siralama: req.body.siralama,
    seourl: req.body.seourl,
    published: req.body.published ? req.body.published : false
  });
   /*   var file = fs.readFileSync(path.normalize(req.file.path));
    var contenttype=mime.getType(path.normalize(req.file.path));
    
    bayi.img = {
      data: file,
      contentType: contenttype     
    } */
  
  kategori
    .save(kategori)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the kategori."
      });
    });
};

exports.findAll = (req, res) => {
  const adi = req.query.adi;
  var condition = adi ? { adi: { $regex: new RegExp(adi), $options: "i" } } : {};

  Kategori.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving kategoris."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Kategori.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found kategori with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving kategori with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Kategori.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update kategori with id=${id}. Maybe kategori was not found!`
        });
      } else res.send({ message: "kategori was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating kategori with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Kategori.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete kategori with id=${id}. Maybe kategori was not found!`
        });
      } else {
        res.send({
          message: "kategori was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete kategori with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Kategori.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} kategoris were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all kategoris."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Kategori.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving kategoris."
      });
    });
};