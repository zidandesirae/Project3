const db = require("../models");

module.exports = {
  getAllUsersByGroupId: function(req, res) {
    db.User
      .findAll({
        include: [
          {
            model: db.Group,
            as: "groups",
            attributes: ["id", "name"],
            required: true,
            where: { id: req.params.id }
          },
        ],
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  postUser: function(req, res) {
    console.log(req.body);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  
  // getAllUsers: function(req, res) {
  //   db.User
  //     .findAll({
  //         attributes: {exclude: ['password'] }
  //     })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


  // updateUserById: function(req, res) {
  //   db.User
  //     .update(req.body, { where: { id: req.params.id } })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


  // removeUserById: function(req, res) {
  //   db.User
  //     .destroy({ where: { id: req.params.id } })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
