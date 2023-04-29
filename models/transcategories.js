'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TRANSCATEGORIES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TRANSCATEGORIES.init({
    transId: DataTypes.INTEGER,
    categId: DataTypes.INTEGER,
    updatedAt: false,
  }, {
    sequelize,
    modelName: 'TRANSCATEGORIES',
  });
  return TRANSCATEGORIES;
};