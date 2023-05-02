"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TRANSACTIONS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TRANSACTIONS.belongsTo(models.cards);
      models.cards.hasMany(TRANSACTIONS);

      TRANSACTIONS.belongsTo(models.cash);
      models.cash.hasMany(TRANSACTIONS);

      TRANSACTIONS.belongsTo(models.CATEGORIES);
      models.CATEGORIES.hasMany(TRANSACTIONS);
    }
  }
  TRANSACTIONS.init(
    {
      userId: DataTypes.INTEGER,
      transAccount: DataTypes.INTEGER,
      transToAccount: DataTypes.INTEGER,
      categId: DataTypes.INTEGER,
      transType: DataTypes.STRING,
      transAmount: DataTypes.FLOAT,
      transNote: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TRANSACTIONS",
    }
  );
  return TRANSACTIONS;
};
