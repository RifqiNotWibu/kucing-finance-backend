const { Op } = require("sequelize");
const { transactions, categories } = require("../models");

class transactionsControllers {
  static async addTransaction(req, res) {
    try {
      const {
        userId,
        transAccount,
        transToAccount,
        categId,
        transType,
        transAmount,
        transNote,
      } = req.body;

      await transactions.create({
        userId,
        transAccount,
        transToAccount,
        categId,
        transType,
        transAmount,
        transNote,
      });
      res.status(201).json({ message: "Category added successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async getTransaction(req, res, next) {
    try {
      const { userId, year, month } = req.body;
      let getTransaction = await transactions.findAll({
        where: {
          createdAt: {
            [Op.gte]: new Date(year, month, 1), // greater than or equal to the start of the month
            [Op.lt]: new Date(year, month + 1, 1),
          },
          userId,
        },
      });
      res.status(200).json(getTransaction);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = transactionsControllers;
