const express = require("express");
const router = express.Router();

const cashControllers = require("../controllers/cashControllers.js");

router.post("/add", cashControllers.addCash);
router.patch("/update", cashControllers.updateCash);
router.post("/delete", cashControllers.deleteCash);

module.exports = router;
