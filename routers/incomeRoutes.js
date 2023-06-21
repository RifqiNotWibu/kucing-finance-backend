const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken.js')

const incomeRoutes = require('../controllers/incomeControllers.js')

router.post('/addIncome', verifyToken, incomeRoutes.addIncome)
router.get('/getIncome/:userId', verifyToken, incomeRoutes.getIncomes)
router.get(
  '/transactions-income/:userId',
  verifyToken,
  incomeRoutes.getIncomesByFilter
)
router.delete('/deleteIncome/:id', verifyToken, incomeRoutes.deleteIncome)

module.exports = router
