const { transactions } = require("../models");

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
}

module.exports = transactionsControllers;
