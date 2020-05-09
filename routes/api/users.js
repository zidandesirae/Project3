const passport = require('passport');

const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route("/login")
  .post(passport.authenticate("local"), (req, res) => {req.user.password = undefined; res.json(req.user);});


module.exports = router;

