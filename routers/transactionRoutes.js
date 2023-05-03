const express = require("express");
const router = express.Router();

const transactionsControllers = require("../controllers/transactionsControllers.js");

router.post("/add", transactionsControllers.addTransaction);
// router.patch("/update", transactionsControllers.updateCash);
// router.post("/delete", transactionsControllers.deleteCash);

module.exports = router;
