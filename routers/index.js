const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes.js");
router.use("/user", userRoutes);

const incomeRoutes = require("./incomeRoutes.js");
router.use("", incomeRoutes);

const outcomeRoutes = require("./outcomeRoutes.js");
router.use("", outcomeRoutes);

module.exports = router;
