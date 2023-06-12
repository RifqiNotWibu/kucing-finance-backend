const express = require('express')
const router = express.Router()

const userRoutes = require('./userRoutes.js')
router.use('', userRoutes)

const incomeRoutes = require('./incomeRoutes.js')
router.use('', incomeRoutes)

const expenseRoutes = require('./expenseRoutes.js')
router.use('', expenseRoutes)

module.exports = router
