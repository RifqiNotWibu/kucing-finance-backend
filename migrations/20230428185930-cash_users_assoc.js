'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('CASH', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'cash_users_assoc',
      references: {
         table: 'USERS',
         field: 'id'
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('CASH', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'cash_users_assoc',
      references: {
         table: 'USERS',
         field: 'id'
      }
     });
  }
};
