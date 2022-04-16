const db = require("../models");
const Duyuru = db.duyurus;

exports.create = (req, res) => {
  if (!req.body.baslik) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const duyuru = new Duyuru({
    baslik: req.body.baslik,
    icerik: req.body.icerik,
    kisaaciklama: req.body.kisaaciklama,
    YoutubeVideoURL: req.body.YoutubeVideoURL,
    Tarih: req.body.Tarih,
    published: req.body.published ? req.body.published : false
  });

  duyuru
    .save(duyuru)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the duyuru."
      });
    });
};

exports.findAll = (req, res) => {
  const baslik = req.query.baslik;
  var condition = baslik ? { baslik: { $regex: new RegExp(baslik), $options: "i" } } : {};

  duyuru.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving duyurus."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  duyuru.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found duyuru with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving duyuru with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  duyuru.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update duyuru with id=${id}. Maybe duyuru was not found!`
        });
      } else res.send({ message: "duyuru was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating duyuru with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  duyuru.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete duyuru with id=${id}. Maybe duyuru was not found!`
        });
      } else {
        res.send({
          message: "duyuru was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete duyuru with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  duyuru.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} duyurus were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all duyurus."
      });
    });
};

exports.findAllPublished = (req, res) => {
  duyuru.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving duyurus."
      });
    });
};