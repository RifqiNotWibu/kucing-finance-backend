const express = require("express");
const router = express.Router();

const incomeRoutes = require("../controllers/incomeControllers.js");

router.post("/addIncome", incomeRoutes.addIncome);
router.post("/getIncome", incomeRoutes.getIncomes);

module.exports = router;
