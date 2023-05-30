const express = require("express");
const router = express.Router();

const outcomeControllers = require("../controllers/outcomeControllers.js");

router.post("/addOutcome", outcomeControllers.addOutcome);
router.post("/getOutome", outcomeControllers.getOutcome);

module.exports = router;
