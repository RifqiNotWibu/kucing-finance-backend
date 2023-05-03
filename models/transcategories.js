"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transcategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transcategories.belongsTo(models.categories);
      models.categories.hasMany(transcategories);

      transcategories.belongsTo(models.transactions);
      models.transactions.hasMany(transcategories);
    }
  }
  transcategories.init(
    {
      transId: DataTypes.INTEGER,
      categId: DataTypes.INTEGER,
      updatedAt: false,
    },
    {
      sequelize,
      modelName: "transcategories",
    }
  );
  return transcategories;
};
