const { INTEGER } = require("sequelize");
const { transactions } = require("../models");

class incomeControllers {
  static async addIncome(req, res, next) {
    try {
      const { type, title, amount, category, description, userId } = req.body;

      if (!title || !category || !description) {
        return res.status(400).json({
          message: "title, category, and description fields are required!",
        });
      }
      if (amount <= 0) {
        return res
          .status(400)
          .json({ message: "Amount field has to be a positive number!" });
      }
      if (typeof amount !== "number") {
        return res
          .status(400)
          .json({ message: "Amount field has to be a number!" });
      }

      if (type !== "income" && type !== "outcome") {
        return res.status(400).json({ message: "Invalid type value" });
      }

      //INSERT
      await transactions.create({
        title,
        type,
        amount,
        category,
        description,
        userId,
      });

      res.status(201).json({ message: "income created successfully!" });
    } catch (err) {
      next(err);
    }
  }

  static async getIncomes(req, res) {
    try {
      const { userId, type } = req.body;
      console.log(userId);
      const getIncomes = await transactions.findAll({
        where: { userId, type },
      });
      res.status(200).json(getIncomes); //ganti status
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = incomeControllers;
