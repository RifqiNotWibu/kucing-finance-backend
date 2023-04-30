const express = require('express');
const router = express.Router();

const usersControllers= require('../controllers/usersControllers.js');

router.post('/signup', usersControllers.signUp);


module.exports = router;
