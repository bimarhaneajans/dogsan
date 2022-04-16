const db = require("../models");
const Sehir = db.sehirs;

exports.create = (req, res) => {
  if (!req.body.baslik) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const sehir = new Sehir({
   /*  ismi: req.body.baslik,
    slidetipi: req.body.slidetipi,
    siralama: req.body.siralama, */
    published: req.body.published ? req.body.published : false
  });

  slider
    .save(slider)
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
  const ismi = req.query.ismi; 
  var condition = ismi ? { ismi: { $regex: new RegExp(ismi), $options: "i" } } : {};

  Slider.find(condition)
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

  Slider.findById(id)
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

  Slider.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  Slider.findByIdAndRemove(id, { useFindAndModify: false })
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
  Slider.deleteMany({})
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
  Slider.find({ published: true })
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