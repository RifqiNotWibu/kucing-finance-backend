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
      transactions.belongsTo(models.cards);
      models.cards.hasMany(transactions);

      transactions.belongsTo(models.cash);
      models.cash.hasMany(transactions);

      transactions.belongsTo(models.categories);
      models.categories.hasMany(transactions);
    }
  }
  transactions.init(
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
      modelName: "transactions",
    }
  );
  return transactions;
};
