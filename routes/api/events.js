const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .put(eventsController.update)
  .delete(eventsController.remove);
  
  router
  .route("/:groupId")
  .get(eventsController.findByGroupId);
  
module.exports = router;