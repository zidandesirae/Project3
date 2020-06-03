const db = require("../models");

module.exports = {
  getAllListsByGroupId: function(req, res) {
    db.List
      .findAll({
          where: {groupId: req.params.groupId }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  postList: function (req, res) {
    db.List
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};