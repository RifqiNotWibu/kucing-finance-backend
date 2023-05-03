const express = require("express");
const router = express.Router();

const categoriesControllers = require("../controllers/categoriesControllers.js");

router.post("/add", categoriesControllers.addCategory);
router.post("/delete", categoriesControllers.deleteCategory);

module.exports = router;
