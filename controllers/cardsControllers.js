const { cards } = require("../models");
// KURANG GET CARD
class cardsControllers {
  static async addCard(req, res) {
    try {
      const { userId, cardName, cardBalance } = req.body;
      await cards.create({
        userId,
        cardName,
        cardBalance,
      });
      res.status(201).json({ message: "Card added successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async getCard(req, res, next) {
    try {
      const { userId } = req.body;
      let getCard = await cards.findAll({
        where: { userId },
        attributes: ["cardName", "cardBalance"],
      });
      // console.log(getUser);
      res.status(200).json(getCard);
    } catch (err) {
      next(err);
    }
  }

  static async updateCard(req, res) {
    try {
      const { id, cardName } = req.body;
      await cards.update(
        {
          cardName,
        },
        {
          where: { id },
        }
      );
      res.status(201).json({ message: "Card updated successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }

  static async deleteCard(req, res) {
    try {
      const { id } = req.body;
      await cards.update(
        {
          isActive: 0, //TAMBAH isActive DI DB
        },
        {
          where: { id },
        }
      );
      res.status(201).json({ message: "Card deleted successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }
}

module.exports = cardsControllers;
