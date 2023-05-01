const express = require("express");
const router = express.Router();

const cashControllers = require("../controllers/cashControllers.js");

router.post("/add", cashControllers.addCard);
router.patch("/update", cashControllers.updateCard);
router.post("/delete", cashControllers.deleteCard);

module.exports = router;
