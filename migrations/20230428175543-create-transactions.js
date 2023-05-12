"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      transCard: {
        type: Sequelize.INTEGER,
      },
      transCash: {
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.INTEGER,
      },
      transType: {
        type: Sequelize.STRING,
      },
      transAmount: {
        type: Sequelize.FLOAT,
      },
      transNote: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("transactions");
  },
};
