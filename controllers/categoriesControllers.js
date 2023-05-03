const { categories } = require("../models");

class categoriesControllers {
  static async addCategory(req, res) {
    try {
      const { categName, categType } = req.body;
      await categories.create({
        categName,
        categType,
      });
      res.status(201).json({ message: "Category added successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }
}
