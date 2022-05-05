const db = require("../models");
const upload = require("../middlewares/upload");
const dbConfig = require("../config/db.config");
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
const Iletisim = db.iletisims;

exports.create = (req, res) => {
    if (!req.body.baslik) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const iletisim = new Iletisim({

        baslik: req.body.baslik,
        adres: req.body.adres,
        telefon: req.body.telefon,
        haritaurl: req.body.haritaurl,
        siralama: req.body.siralama,
        published: req.body.published ? req.body.published : false
    });
    /*   var file = fs.readFileSync(path.normalize(req.file.path));
    var contenttype=mime.getType(path.normalize(req.file.path));
    
    bayi.img = {
      data: file,
      contentType: contenttype     
    } */
  
    iletisim
        .save(iletisim)
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
    const baslik = req.query.baslik;
    var condition = baslik ? { baslik: { $regex: new RegExp(baslik), $options: "i" } } : {};

    Iletisim.find(condition)
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

    Iletisim.findById(id)
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

    Iletisim.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

    Iletisim.findByIdAndRemove(id, { useFindAndModify: false })
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
    Iletisim.deleteMany({})
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
    Iletisim.find({ published: true })
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