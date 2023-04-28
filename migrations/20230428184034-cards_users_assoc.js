'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('CARDS', {
       fields: ['userId'],
       type: 'foreign key',
       name: 'cards_users_assoc',
       references: {
          table: 'USERS',
          field: 'id'
       }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('CARDS', {
        fields: ['userId'],
        type: 'foreign key',
        name: 'cards_users_assoc',
        references: {
          table: 'USERS',
          field: 'id'
        }
      });
  }
};
