const express = require('express')
const router = express.Router()

const expenseControllers = require('../controllers/expenseControllers.js')

router.post('/addExpense', expenseControllers.addExpense)
router.get('/getExpense/:userId', expenseControllers.getExpenses)
router.delete('/deleteExpense/:id', expenseControllers.deleteExpense)

module.exports = router
