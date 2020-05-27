const router = require("express").Router();
const userRoutes = require("./users");
const groupRoutes = require("./groups");
const eventRoutes = require("./events");
const messageRoutes = require("./messages");

// User routes
router.use("/users", userRoutes);

// Group routes
router.use("/groups", groupRoutes);

// Event routes
router.use("/events", eventRoutes);

// Message routes
router.use("/messages", messageRoutes);


module.exports = router;