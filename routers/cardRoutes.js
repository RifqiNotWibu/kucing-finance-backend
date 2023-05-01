const express = require("express");
const router = express.Router();

const cardsControllers = require("../controllers/cardsControllers.js");

router.post("/add", cardsControllers.addCard);
router.patch("/update/:userId", cardsControllers.updateUser);
router.post("/delete", cardsControllers.deleteUser);

module.exports = router;
