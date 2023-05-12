const { cash } = require("../models");
// KURANG GET cash
class cashControllers {
  static async addCash(req, res) {
    try {
      const { userId, cashName, cashBalance } = req.body;
      await cash.create({
        userId,
        cashName,
        cashBalance,
      });
      res.status(201).json({ message: "Cash added successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async getCash(req, res, next) {
    try {
      const { userId } = req.body;
      let getCash = await cash.findAll({
        where: { userId },
        attributes: ["cashName"],
      });
      // console.log(getUser);
      res.status(200).json(getCash);
    } catch (err) {
      next(err);
    }
  }

  static async updateCash(req, res) {
    try {
      const { id, cashName } = req.body;
      await cash.update(
        {
          cashName,
        },
        {
          where: { id },
        }
      );
      res.status(201).json({ message: "Cash updated successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async deleteCash(req, res) {
    try {
      const { id } = req.body;
      await cash.update(
        {
          isActive: 0, //TAMBAH isActive DI DB
        },
        {
          where: { id },
        }
      );
      res.status(201).json({ message: "Cash deleted successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }
}

module.exports = cashControllers;
