const router = require("express").Router();
const messagesController = require("../../controllers/messagesController");

router.route("/")
  .post(messagesController.postMessage);

  router
  .route("/:groupId")
  .get(messagesController.getAllMessagesByGroupId);

module.exports = router;