const db = require("../models");

// Defining methods for the groupsController
module.exports = {
    findAll: function(req, res) {
        db.Group
          .findAll({
            where: {id: req.params.id, name: req.params.name}
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findOne: function(req, res) {
        db.Group
        .findOne({
            where: {id: req.params.id}
        })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Group
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
      // update: function(req, res) {
      //   db.Group
      //     .update(req.body, { where: {id: req.params.id} })
      //     .then(dbModel => res.json(dbModel))
      //     .catch(err => res.status(422).json(err));
      // },
      // remove: function(req, res) {
      //   db.Group
      //     .destroy({ where: {id: req.params.id} })
      //     .then(dbModel => res.json(dbModel))
      //     .catch(err => res.status(422).json(err));
      // }
  };