"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cards.belongsTo(models.users);
      models.users.hasMany(cards);
    }
  }
  cards.init(
    {
      userId: DataTypes.INTEGER,
      cardName: DataTypes.STRING,
      cardBalance: DataTypes.FLOAT,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "cards",
    }
  );
  return cards;
};
