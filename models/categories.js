'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CATEGORIES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CATEGORIES.init({
    categName: DataTypes.STRING,
    categType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CATEGORIES',
  });
  return CATEGORIES;
};