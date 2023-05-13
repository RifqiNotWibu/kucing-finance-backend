const { Op } = require("sequelize");
const { transactions, cards, cash } = require("../models");

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

      if (transType == "income" && transCash != null) {
        const findCash = await cash.findOne({ where: { id: userId } });
        findCash.cashBalance += transAmount;
        await findCash.save();
      } else if (transType == "income" && transCard != null) {
        const findCard = await cards.findOne({ where: { id: userId } });
        findCard.cardBalance += transAmount;
        await findCard.save();
      }

      if (transType == "outcome" && transCash != null) {
        const findCash = await cash.findOne({ where: { id: userId } });
        findCash.cashBalance -= transAmount;
        await findCash.save();
      } else if (transType == "outcome" && transCard != null) {
        const findCard = await cards.findOne({ where: { id: userId } });
        findCard.cardBalance -= transAmount;
        await findCard.save();
      }
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
      let getTransaction = await transactions.findAll({
        where: {
          createdAt: {
            [Op.gte]: new Date(year, month, 1),
            [Op.lt]: new Date(year, month + 1, 1),
          },
          userId,
        },
        attributes: [
          "transCash",
          "transCard",
          "category",
          "transType",
          "transAmount",
          "transNote",
          "createdAt",
        ],
      });
      res.status(200).json(getTransaction);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = transactionsControllers;
