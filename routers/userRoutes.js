const express = require('express')
const router = express.Router()

const usersControllers = require('../controllers/usersControllers.js')

router.post('/register', usersControllers.signUp)
router.post('/login', usersControllers.login)
router.patch('/update', usersControllers.updateUser)
router.post('/delete', usersControllers.deleteUser)
router.post('/get', usersControllers.getUser)
router.post('/forpassemail', usersControllers.forgetPassEmail)
router.post('/forpassotp', usersControllers.forgetPassOtp)

module.exports = router
