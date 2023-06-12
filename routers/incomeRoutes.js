const express = require('express')
const router = express.Router()

const incomeRoutes = require('../controllers/incomeControllers.js')

router.post('/addIncome', incomeRoutes.addIncome)
router.get('/getIncome/:userId', incomeRoutes.getIncomes)
router.get('/transactions-income/:userId', incomeRoutes.getIncomesByFilter)
router.delete('/deleteIncome/:id', incomeRoutes.deleteIncome)

module.exports = router
