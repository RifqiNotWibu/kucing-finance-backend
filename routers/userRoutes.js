const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers.js");

router.post("/signup", usersControllers.signUp);
router.patch("/update", usersControllers.updateUser);
router.post("/delete", usersControllers.deleteUser);

module.exports = router;
