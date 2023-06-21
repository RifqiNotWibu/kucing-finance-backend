const { transactions } = require('../models')
const { Op } = require('sequelize')

class expenseControllers {
  static async addExpense(req, res, next) {
    try {
      const { title, amount, category, description, userId, date } = req.body

      if (!title || !category || !description) {
        return res.status(400).json({
          message: 'all fields are required!',
        })
      }
      if (amount <= 0) {
        return res
          .status(400)
          .json({ message: 'Amount field has to be a positive number!' })
      }
      if (typeof amount !== 'number') {
        return res
          .status(400)
          .json({ message: 'Amount field has to be a number!' })
      }

      //INSERT
      await transactions.create({
        type: 'expense',
        title,
        amount,
        category,
        description,
        userId,
        date,
      })

      res.status(201).json({ message: 'Expense created successfully!' })
    } catch (err) {
      next(err)
    }
  }

  static async getExpenses(req, res) {
    try {
      const { userId } = req.params
      const getExpense = await transactions.findAll({
        where: { userId, type: 'expense', isActive: 1 },
      })

      res.status(200).json(getExpense) //ganti status
    } catch (err) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  static async getExpensesByFilter(req, res, next) {
    try {
      const { userId } = req.params
      const { year, month } = req.query
      let startDate, endDate

      if (month == 0) {
        startDate = new Date(year, 1, 1)
        endDate = new Date(year, 12, 31)
      } else if (month > 0) {
        startDate = new Date(year, month - 1, 1)
        endDate = new Date(year, month, 0)
      }

      const getExpensesByFilter = await transactions.findAll({
        where: {
          userId,
          type: 'expense',
          isActive: 1,
          date: {
            [Op.between]: [startDate, endDate], // Filter by the createdAt column
          },
        },
      })

      res.status(200).json(getExpensesByFilter)
    } catch (err) {
      next(err)
    }
  }

  static async deleteExpense(req, res) {
    try {
      const { id } = req.params
      const { userId } = req.body

      const findExpense = await transactions.findOne({
        where: { userId, id, type: 'expense', isActive: 1 },
      })

      if (!findExpense) {
        return res.status(200).json({ message: 'Expense not found!' })
      }

      await transactions.update(
        { isActive: 0 },
        {
          where: { userId, id, type: 'expense' },
        }
      )

      return res.status(200).json({ message: 'Expense deleted successfully!' })
    } catch (err) {
      res.status(500).json({ message: 'Server error' })
    }
  }
}

module.exports = expenseControllers
