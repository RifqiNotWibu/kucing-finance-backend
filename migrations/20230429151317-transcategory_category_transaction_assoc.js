'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('TRANSCATEGORIES', {
      fields: ['transId'],
      type: 'foreign key',
      name: 'transactions_transId', //NAMANYA BEDAIN
      references: {
          table: 'TRANSACTIONS',
          field: 'id'
      }
      });
    await queryInterface.addConstraint('TRANSCATEGORIES', {
      fields: ['categId'],
      type: 'foreign key',
      name: 'categories_categId', //NAMANYA BEDAIN
      references: {
          table: 'CATEGORIES',
          field: 'id'
      }
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
