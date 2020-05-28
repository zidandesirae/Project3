const db = require("../models");

module.exports = {
  getAllMessagesByGroupId: function(req, res) {
    db.Message
      .findAll({
          where: {groupId: req.params.groupId }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  postMessage: function (req, res) {
    db.Message
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
//   removeMessageById: function(req, res) {
//     db.Message
//       .destroy({ where: {id: req.params.id} })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};