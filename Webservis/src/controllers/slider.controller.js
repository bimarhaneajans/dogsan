const db = require("../models");
const Slider = db.sliders;

 exports.create = (req, res) => {
   if (!req.body.baslik) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const bayi  = new Bayi({
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
  const ismi = req.query.ismi; // burayı kontrol et
  var condition = ismi ? { ismi: { $regex: new RegExp(ismi), $options: "i" } } : {};

  Slider.find(condition)
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

  Slider.findById(id)
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

  Slider.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  Slider.findByIdAndRemove(id, { useFindAndModify: false })
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
  Slider.deleteMany({})
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
  Slider.find({ published: true })
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