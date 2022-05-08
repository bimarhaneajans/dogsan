const db = require("../models");
const upload = require("../middlewares/upload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
const Mesaj = db.mesajs;

 exports.create = (req, res) => {
   if (!req.body.Subject) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const mesaj  = new Mesaj({
    Subject: req.body.Subject,
    email: req.body.email,
    Content: req.body.Content,
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
  
  mesaj
    .save(mesaj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the mesaj."
      });
    });
};

 exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};

  Mesaj.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mesajs."
      });
    });
};

 exports.findOne = (req, res) => {
  const id = req.params.id;

  Mesaj.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found mesaj with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving mesaj with id=" + id });
    });
};

 exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Mesaj.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update mesaj with id=${id}. Maybe mesaj was not found!`
        });
      } else res.send({ message: "mesaj was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating mesaj with id=" + id
      });
    });
};

 exports.delete = (req, res) => {
  const id = req.params.id;

  Mesaj.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete mesaj with id=${id}. Maybe mesaj was not found!`
        });
      } else {
        res.send({
          message: "mesaj was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete mesaj with id=" + id
      });
    });
};

 exports.deleteAll = (req, res) => {
  Mesaj.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} mesajs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all mesajs."
      });
    });
};

 exports.findAllPublished = (req, res) => {
  Mesaj.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving mesajs."
      });
    });
};