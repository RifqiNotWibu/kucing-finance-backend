const express = require("express");
const router = express.Router();

const cardsControllers = require("../controllers/cardsControllers.js");

router.post("/add", cardsControllers.addCard);
router.patch("/update", cardsControllers.updateCard);
router.post("/delete", cardsControllers.deleteUser);

module.exports = router;
