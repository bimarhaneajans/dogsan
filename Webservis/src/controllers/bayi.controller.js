const db = require("../models");
const Bayi = db.bayi;
//const Op = db.Sequelize.Op;

 exports.create = (req, res) => {
   if (!req.body.baslik) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

   const bayi = {
    baslik: req.body.baslik,
    Konum: req.body.Konum,
    Konumlinki: req.body.Konumlinki,
    icerik:req.body.icerik,
    published: req.body.published ? req.body.published : false
  };

  Bayi.create(bayi)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

 exports.findAll = (req, res) => {
  const baslik = req.query.baslik;
  //var condition = baslik ? { baslik: { [Op.like]: `%${baslik}%` } } : null;
  var condition = baslik ? { baslik: { $regex: new RegExp(baslik), $options: "i" } } : {};

  Bayi.findAll({ where: condition })
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

  Bayi.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

 exports.update = (req, res) => {
  const id = req.params.id;

  Bayi.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

 exports.delete = (req, res) => {
  const id = req.params.id;

  Bayi.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

 exports.deleteAll = (req, res) => {
    Bayi.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} bayis were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all bayis."
      });
    });
};

 exports.findAllPublished = (req, res) => {
    Bayi.findAll({ where: { published: true } })
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