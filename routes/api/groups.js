const router = require("express").Router();
const groupsController = require("../../controllers/groupsController");

// Matches with "/api/groups"
router.route("/")
  // .get(groupsController.findAll)
  .post(groupsController.create);

// Matches with "/api/groups/:id"
router
  .route("/:id")
  .get(groupsController.findOne)
  // .put(groupsController.update)
  // .delete(groupsController.remove);

router
  .route("/:id/:name")
  .get(groupsController.findAll);


module.exports = router;