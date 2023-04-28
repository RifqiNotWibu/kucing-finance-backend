'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TRANSACTIONs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transAccount: {
        type: Sequelize.INTEGER
      },
      transToAccount: {
        type: Sequelize.INTEGER
      },
      categId: {
        type: Sequelize.INTEGER
      },
      transType: {
        type: Sequelize.STRING
      },
      transAmount: {
        type: Sequelize.FLOAT
      },
      transNote: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TRANSACTIONs');
  }
};