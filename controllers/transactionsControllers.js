const { Op } = require("sequelize");
const { transactions, cards } = require("../models");

class transactionsControllers {
  static async addTransaction(req, res) {
    try {
      const {
        userId,
        transCash,
        transCard,
        category,
        transType,
        transAmount,
        transNote,
      } = req.body;

      await transactions.create({
        userId,
        transCash,
        transCard,
        category,
        transType,
        transAmount,
        transNote,
      });
      res.status(201).json({ message: "Transaction added successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async getTransaction(req, res, next) {
    try {
      const { userId, year, month } = req.body;
      let getTransaction = await cards.findAll({
        where: {
          createdAt: {
            [Op.gte]: new Date(year, month, 1),
            [Op.lt]: new Date(year, month + 1, 1),
          },
          userId,
        },
        include: {
          model: transactions,
          attributes: [
            "transCash",
            "transCard",
            "category",
            "transType",
            "transAmount",
            "transNote",
            "createdAt",
          ],
        },
        attributes: ["cardName"],
      });
      res.status(200).json({
        getTransaction,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = transactionsControllers;
