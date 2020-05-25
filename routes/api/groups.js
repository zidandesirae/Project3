const router = require("express").Router();
const groupsController = require("../../controllers/groupsController");

router.route("/")
  .get(groupsController.getAllGroups)
  .post(groupsController.postGroup);

router
  .route("/:id")
  .get(groupsController.getGroupById)
  .put(groupsController.updateGroupById)
  .delete(groupsController.removeGroupById);

router
  .route("/:id/:name")
  .get(groupsController.getGroupByIdName);


module.exports = router;