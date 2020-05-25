const db = require("../models");

// Defining methods for the groupsController
module.exports = {
  getAllGroups: function (req, res) {
    db.Group
      .findAll({
          attributes: ['name']
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getGroupById: function (req, res) {
    db.Group
      .findOne({
        where: { id: req.params.id }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getGroupByIdName: function (req, res) {
    db.Group
      .findOne({
        where: { id: req.params.id, name: req.params.name }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  postGroup: function (req, res) {
    db.Group
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateGroupById: function(req, res) {
    db.Group
      .update(req.body, { where: {id: req.params.id} })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeGroupById: function(req, res) {
    db.Group
      .destroy({ where: {id: req.params.id} })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};