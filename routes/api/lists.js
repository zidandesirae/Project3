const router = require("express").Router();
const listsController = require("../../controllers/listsController");

router.route("/")
  .post(listsController.postList);

  router
  .route("/:groupId")
  .get(listsController.getAllListsByGroupId);

module.exports = router;