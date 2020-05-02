const router = require("express").Router();
const userRoutes = require("./users");
const groupRoutes = require("./groups");
const eventRoutes = require("./events");
const listsRoutes = require('./lists');

// User routes
router.use("/users", userRoutes);

// Group routes
router.use("/groups", groupRoutes);

// Event routes
router.use("/events", eventRoutes);


router.use("/lists", listsRoutes);

module.exports = router;