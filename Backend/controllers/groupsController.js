const db = require("../models");

// Defining methods for the groupsController
module.exports = {
    findAll: function(req, res) {
        db.Group
          .findAll({
              attributes: name, description 
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Group
        .findAll({
            where: {name: req.params.name}
        })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Group
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Group
          .update(req.body, { where: {name: req.params.name} })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Group
          .destroy({ where: {name: req.params.name} })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
  };