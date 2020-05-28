const db = require("../models");

// Defining methods for the groupsController
module.exports = {
  // getAllGroups: function (req, res) {
  //   db.Group
  //     .findAll({
  //       attributes: ['id', "name"],
  //       include: [
  //         {
  //           // associated model 
  //           model: db.User,
  //           // property it shows up in 
  //           as: "users",
  //           attributes: ["id", "fullname"],
  //           required: true
  //           // where: { id: req.params.groupId }
  //         },
  //       ],
  //     })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  getAllGroupsByUserId: function (req, res) {
    db.Group
      .findAll({
        include: [
          {
            model: db.User,
            as: "users",
            attributes: ["id", "fullname", "email", "password", "phone", "birthday"],
            required: true,
            where: { id: req.params.id }
          },
        ],
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
  addUserToGroup: function (req, res) {
    db.Group
      .findOne({
        where: { id: req.params.groupId }
      })
      .then((group) => {
        if (!group) {
          console.log("group not found!");
          res.status(422).json({});
        }
        return db.User.findOne({
          where: { id: req.params.userId }
        }).then((user) => {
          if (!user) {
            console.log("Tutorial not found!");
            res.status(422).json({});
          }
          group.addUser(user);
          console.log(`>> added Tutorial id=${user.id} to group id=${group.id}`);
          res.json(group);
        });
      })
      .catch(err => res.status(422).json(err));
  },



  // updateGroupById: function (req, res) {
  //   db.Group
  //     .update(req.body, { where: { id: req.params.id } })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


  // removeGroupById: function (req, res) {
  //   db.Group
  //     .destroy({ where: { id: req.params.id } })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
};