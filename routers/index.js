const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes.js");
router.use("/user", userRoutes);

const cardRoutes = require("./cardRoutes.js");
router.use("/card", cardRoutes);

const cashRoutes = require("./cashRoutes.js");
router.use("/cash", cashRoutes);

module.exports = router;
