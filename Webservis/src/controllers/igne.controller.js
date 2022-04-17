const db = require("../models");
const Igne = db.ignes;

exports.create = (req, res) => {
  if (!req.body.igneadi) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const igne = new Igne({
    igneadi: req.body.igneadi,
    siralama: req.body.siralama,

    published: req.body.published ? req.body.published : false
  });

  igne
    .save(igne)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the igne."
      });
    });
};

exports.findAll = (req, res) => {
  const igneadi = req.query.igneadi;
  var condition = igneadi ? { igneadi: { $regex: new RegExp(igneadi), $options: "i" } } : {};

  Igne.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ignes."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Igne.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found igne with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving igne with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Igne.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update igne with id=${id}. Maybe igne was not found!`
        });
      } else res.send({ message: "igne was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating igne with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Igne.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete igne with id=${id}. Maybe igne was not found!`
        });
      } else {
        res.send({
          message: "igne was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete igne with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Igne.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} ignes were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ignes."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Igne.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ignes."
      });
    });
};