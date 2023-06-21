const express = require('express')
const router = express.Router()

const expenseRoutes = require('../controllers/expenseControllers.js')

router.post('/addExpense', verifyToken, expenseRoutes.addExpense)
router.get('/getExpense/:userId', verifyToken, expenseRoutes.getExpenses)
router.get(
  '/transactions-expense/:userId',
  verifyToken,
  expenseRoutes.getExpensesByFilter
)
router.delete('/deleteExpense/:id', verifyToken, expenseRoutes.deleteExpense)

module.exports = router
