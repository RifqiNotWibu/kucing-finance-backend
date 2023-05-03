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

  static async deleteCategory(req, res) {
    try {
      const { categName } = req.body;
      await categories.update(
        {
          isActive: 1,
        },
        {
          where: { categName },
        }
      );
      res.status(201).json({ message: "Category deleted successfully!" });
    } catch (err) {
      res.status(500).json({ message: `${err.message}` });
    }
  }
}

module.exports = categoriesControllers;
