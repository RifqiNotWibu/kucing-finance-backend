const { transactions } = require('../models')
const { Op } = require('sequelize')

class incomeControllers {
  static async addIncome(req, res, next) {
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
        type: 'income',
        title,
        amount,
        category,
        description,
        date,
        userId,
        date,
      })

      res.status(201).json({ message: 'Income created successfully!' })
    } catch (err) {
      next(err)
    }
  }

  static async getIncomes(req, res) {
    try {
      const { userId } = req.params
      const getIncomes = await transactions.findAll({
        where: { userId, type: 'income', isActive: 1 },
      })

      res.status(200).json(getIncomes)
    } catch (err) {
      res.status(500).json({ message: 'Server error' })
    }
  }

  static async getIncomesByFilter(req, res, next) {
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

      const getIncomesByFilter = await transactions.findAll({
        where: {
          userId,
          type: 'income',
          isActive: 1,
          date: {
            [Op.between]: [startDate, endDate], // Filter by the createdAt column
          },
        },
      })

      res.status(200).json(getIncomesByFilter)
    } catch (err) {
      next(err)
    }
  }

  static async deleteIncome(req, res) {
    try {
      const { id } = req.params
      const { userId } = req.body

      const findIncome = await transactions.findOne({
        where: { userId, id, type: 'income', isActive: 1 },
      })

      if (!findIncome) {
        return res.status(200).json({ message: 'Income not found!' })
      }

      await transactions.update(
        { isActive: 0 },
        {
          where: { userId, id, type: 'income' },
        }
      )

      return res.status(200).json({ message: 'Income deleted successfully!' })
    } catch (err) {
      res.status(500).json({ message: 'Server error' })
    }
  }
}

module.exports = incomeControllers
