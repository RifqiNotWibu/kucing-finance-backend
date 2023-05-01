const { cards } = require("../models");

class cardsControllers {
  static async addCard(req, res, next) {
    try {
      const { userId, cardName, cardType } = req.body;
      await cards.create({
        userId,
        cardName,
        cardType,
      });
      res.status(201).json({ message: "Card added successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }
}
