const router = require("express").Router();

const userRoutes = require("./users");
const groupRoutes = require("./groups");
const eventRoutes = require("./events");
const messageRoutes = require("./messages");
const listRoutes = require("./lists");

router.use("/users", userRoutes);
router.use("/groups", groupRoutes);
router.use("/events", eventRoutes);
router.use("/messages", messageRoutes);
router.use("lists", listRoutes);

module.exports = router;