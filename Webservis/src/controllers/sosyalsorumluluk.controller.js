const db = require("../models");
const Sosyalsorumluluk = db.sosyalsorumluluks;

 exports.create = (req, res) => {
   if (!req.body.baslik) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const sosyalsorumluluk  = new Sosyalsorumluluk({
   /*  baslik: req.body.baslik,
    Konum: req.body.Konum,
    Konumlinki: req.body.Konumlinki,
    icerik:req.body.icerik, */
    published: req.body.published ? req.body.published : false
  });

  bayi
    .save(bayi)
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
  const baslik = req.query.baslik;
  var condition = baslik ? { baslik: { $regex: new RegExp(baslik), $options: "i" } } : {};

  Bayi.find(condition)
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

  Bayi.findById(id)
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

  Bayi.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  Bayi.findByIdAndRemove(id, { useFindAndModify: false })
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
  Bayi.deleteMany({})
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
  Bayi.find({ published: true })
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