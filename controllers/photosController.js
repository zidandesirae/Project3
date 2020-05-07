const db = require("../models");

// Defining methods for the groupsController
module.exports = {
    findAll: function (req, res) {
        db.Photos
            .findAll({
                attributes: ["name", "description", "start", "end", "id"]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Photos
            .findAll({
                where: { name: req.params.name }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Photos
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Photos
            .update(req.body, { where: {id: req.params.id} })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
},
    remove: function(req, res) {
        db.Photos
            .destroy({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};