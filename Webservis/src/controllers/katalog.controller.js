const db = require("../models");
const Katalog = db.katalogs;

 exports.create = (req, res) => {
   if (!req.body.baslik) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const katalog  = new Katalog({
    katalogadi: req.body.katalogadi,
    published: req.body.published ? req.body.published : false
  });

  katalog
    .save(katalog)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the katalog."
      });
    });
};

 exports.findAll = (req, res) => {
  const katalogadi = req.query.katalogadi;
  var condition = katalogadi ? { katalogadi: { $regex: new RegExp(katalogadi), $options: "i" } } : {};

  Katalog.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving katalogs."
      });
    });
};

 exports.findOne = (req, res) => {
  const id = req.params.id;

  Katalog.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found katalog with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving katalog with id=" + id });
    });
};

 exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Katalog.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update katalog with id=${id}. Maybe katalog was not found!`
        });
      } else res.send({ message: "katalog was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating katalog with id=" + id
      });
    });
};

 exports.delete = (req, res) => {
  const id = req.params.id;

  Katalog.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete katalog with id=${id}. Maybe katalog was not found!`
        });
      } else {
        res.send({
          message: "katalog was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete katalog with id=" + id
      });
    });
};

 exports.deleteAll = (req, res) => {
  Katalog.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} katalogs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all katalogs."
      });
    });
};

 exports.findAllPublished = (req, res) => {
  Katalog.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving katalogs."
      });
    });
};