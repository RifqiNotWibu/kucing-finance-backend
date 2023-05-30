const express = require("express");
const router = express.Router();

const outcomeControllers = require("../controllers/outcomeControllers.js");

router.post("/addOutcome", outcomeControllers.addOutcome);

module.exports = router;
