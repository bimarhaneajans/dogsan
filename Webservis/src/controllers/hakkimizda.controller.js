const db = require("../models");
const upload = require("../middlewares/upload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
const Hakkimizda = db.hakkimizdas;

 exports.create = (req, res) => {
   if (!req.body.AnaIcerik) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const hakkimizda  = new Hakkimizda({
    AnaBaslik: req.body.AnaBaslik,
    BelgeselBaslik:req.body.BelgeselBaslik,
    AnaIcerik: req.body.AnaIcerik,
    BelgeselIcerigi: req.body.BelgeselIcerigi, 
    BelgeselVideoUrl:req.body.BelgeselVideoUrl, 
    Resimbaslik: req.body.Resimbaslik,
    Resim: req.body.Resim,
    published: req.body.published ? req.body.published : false
  });
   /*   var file = fs.readFileSync(path.normalize(req.file.path));
    var contenttype=mime.getType(path.normalize(req.file.path));
    
    bayi.img = {
      data: file,
      contentType: contenttype     
    } */
  
  hakkimizda
    .save(hakkimizda)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the hakkimizda."
      });
    });
};

 exports.findAll = (req, res) => {
  const AnaIcerik = req.query.AnaIcerik;
  var condition = AnaIcerik ? { AnaIcerik: { $regex: new RegExp(AnaIcerik), $options: "i" } } : {};

  Hakkimizda.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hakkimizdas."
      });
    });
};

 exports.findOne = (req, res) => {
  const id = req.params.id;

  Hakkimizda.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found hakkimizda with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving hakkimizda with id=" + id });
    });
};

 exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Hakkimizda.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update hakkimizda with id=${id}. Maybe hakkimizda was not found!`
        });
      } else res.send({ message: "hakkimizda was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating hakkimizda with id=" + id
      });
    });
};

 exports.delete = (req, res) => {
  const id = req.params.id;

  Hakkimizda.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete hakkimizda with id=${id}. Maybe hakkimizda was not found!`
        });
      } else {
        res.send({
          message: "hakkimizda was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete hakkimizda with id=" + id
      });
    });
};

 exports.deleteAll = (req, res) => {
  Hakkimizda.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} hakkimizdas were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all hakkimizdas."
      });
    });
};

 exports.findAllPublished = (req, res) => {
  Hakkimizda.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving hakkimizdas."
      });
    });
};