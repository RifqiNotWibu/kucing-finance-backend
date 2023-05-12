const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers.js");

router.post("/signup", usersControllers.signUp);
router.post("/signin", usersControllers.login);
router.patch("/update", usersControllers.updateUser);
router.post("/delete", usersControllers.deleteUser);
router.post("/get", usersControllers.getUser);
router.post("/forpassemail", usersControllers.forgetPassEmail);

module.exports = router;
