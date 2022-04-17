const db = require("../models");
const TarihceGarleri = db.TarihceGarleris;

 exports.create = (req, res) => {
   if (!req.body.Galeribaslik) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const tarihceGarleri  = new TarihceGarleri({
    Galeribaslik: req.body.Galeribaslik ,
    published: req.body.published ? req.body.published : false
  });

  tarihceGarleri
    .save(tarihceGarleri)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TarihceGarleri."
      });
    });
};

 exports.findAll = (req, res) => {
  const Galeribaslik = req.query.Galeribaslik;
  var condition = Galeribaslik ? { Galeribaslik: { $regex: new RegExp(Galeribaslik), $options: "i" } } : {};

  TarihceGarleri.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tarihce Garleri."
      });
    });
};

 exports.findOne = (req, res) => {
  const id = req.params.id;

  TarihceGarleri.findById(id)
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

  TarihceGarleri.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  TarihceGarleri.findByIdAndRemove(id, { useFindAndModify: false })
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
  TarihceGarleri.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tarihce Garleri were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Tarihce Garleri."
      });
    });
};

 exports.findAllPublished = (req, res) => {
  TarihceGarleri.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tarihce Garleri."
      });
    });
};