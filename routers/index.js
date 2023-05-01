const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes.js");
router.use("/user", userRoutes);

const cardRoutes = require("./cardRoutes.js");
router.use("/card", cardRoutes);

module.exports = router;
