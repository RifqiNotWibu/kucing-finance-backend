const express = require("express");
const router = express.Router();

const cardsControllers = require("../controllers/cardsControllers.js");

router.post("/add", cardsControllers.addCard);
router.post("/get", cardsControllers.getCard);
router.patch("/update", cardsControllers.updateCard);
router.post("/delete", cardsControllers.deleteCard);

module.exports = router;
