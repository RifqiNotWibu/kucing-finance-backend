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
}

module.exports = outcomeControllers;
