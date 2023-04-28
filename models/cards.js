'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CARDS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CARDS.belongsTo(models.USERS);
      models.USERS.hasMany(CARDS);
    }
  }
  CARDS.init({
    userId: DataTypes.INTEGER,
    cardName: DataTypes.STRING,
    cardBalance: DataTypes.FLOAT,
    cardType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CARDS',
  });
  return CARDS;
};