const { cash } = require("../models");
// KURANG GET CASH
class cashControllers {
  static async addCash(req, res, next) {
    try {
      const { userId, cashName, cashType } = req.body;
      await cash.create({
        userId,
        cashName,
        cashType,
      });
      res.status(201).json({ message: "Cash added successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async updatecash(req, res, next) {
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
