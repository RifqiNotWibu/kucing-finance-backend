const { transactions } = require("../models");

class outcomeControllers {
  static async addOutcome(req, res, next) {
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

      res.status(201).json({ message: "Outcome created successfully!" });
    } catch (err) {
      next(err);
    }
  }

  static async getIncomes(req, res) {
    try {
      const { userId } = req.body;
      const getOutcomes = await transactions.findAll({
        where: { userId, type: "outcome", isActive: 1 },
      });

      res.status(200).json(getOutcomes); //ganti status
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }

  static async deleteIncome(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.body;

      const findOutcome = await transactions.findOne({
        where: { userId, id, type: "outcome", isActive: 1 },
      });

      if (!findOutcome) {
        return res.status(200).json({ message: "Outcome not found!" });
      }

      await transactions.update(
        { isActive: 0 },
        {
          where: { userId, id, type: "outcome" },
        }
      );

      return res.status(200).json({ message: "Outcome deleted successfully!" });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = outcomeControllers;
