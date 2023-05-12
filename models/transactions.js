"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transactions.belongsTo(models.cards, {
        as: "transCardId",
        foreignKey: "transAccount",
      });

      transactions.belongsTo(models.cash, {
        as: "transCashId",
        foreignKey: "transAccount",
      });
    }
  }
  transactions.init(
    {
      userId: DataTypes.INTEGER,
      transCash: DataTypes.INTEGER,
      transCard: DataTypes.INTEGER,
      category: DataTypes.STRING,
      transType: DataTypes.STRING,
      transAmount: DataTypes.FLOAT,
      transNote: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "transactions",
    }
  );
  return transactions;
};
