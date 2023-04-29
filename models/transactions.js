'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TRANSACTIONS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TRANSACTIONS.belongsTo(models.CARDS);
      models.CARDS.hasMany(TRANSACTIONS);

      TRANSACTIONS.belongsTo(models.CASH);
      models.CASH.hasMany(TRANSACTIONS);

      TRANSACTIONS.belongsTo(models.CATEGORIES);
      models.CATEGORIES.hasMany(TRANSACTIONS);
    }
  }
  TRANSACTIONS.init({
    transAccount: DataTypes.INTEGER,
    transToAccount: DataTypes.INTEGER,
    categId: DataTypes.INTEGER,
    transType: DataTypes.STRING,
    transAmount: DataTypes.FLOAT,
    transNote: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TRANSACTIONS',
  });
  return TRANSACTIONS;
};