const passport = require('passport');

const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/")
  // .get(usersController.getAllUsers)
  .post(usersController.postUser);

router
  .route("/:id")
  .get(usersController.getAllUsersByGroupId)
  // .put(usersController.updateUserById);
  // .delete(usersController.removeUserById);

router
  .route("/login")
  .post(passport.authenticate("local"), (req, res) => { 
    req.user.password = undefined;
    res.json(req.user); 
  });


module.exports = router;

