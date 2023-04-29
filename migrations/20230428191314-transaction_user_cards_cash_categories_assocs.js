'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('TRANSACTIONS', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'id_userId',
      references: {
          table: 'USERS',
          field: 'id'
      }
    });
    await queryInterface.addConstraint('TRANSACTIONS', {
      fields: ['transAccount'],
      type: 'foreign key',
      name: 'cash_transAccount',
      references: {
          table: 'CASH',
          field: 'id'
      }
    });
    await queryInterface.addConstraint('TRANSACTIONS', {
      fields: ['transAccount'],
      type: 'foreign key',
      name: 'card_transAccount', //NAMANYA BEDAIN
      references: {
          table: 'CARDS',
          field: 'id'
      }
      });
    
    await queryInterface.addConstraint('TRANSACTIONS', {
      fields: ['transToAccount'],
      type: 'foreign key',
      name: 'cash_transToAccount',
      references: {
          table: 'CASH',
          field: 'id'
      }
    });
    await queryInterface.addConstraint('TRANSACTIONS', {
      fields: ['transToAccount'],
      type: 'foreign key',
      name: 'card_transToAccount', //NAMANYA BEDAIN
      references: {
          table: 'CARDS',
          field: 'id'
      }
      });

    await queryInterface.addConstraint('TRANSACTIONS', {
      fields: ['categId'],
      type: 'foreign key',
      name: 'categ_categId', //NAMANYA BEDAIN
      references: {
          table: 'CATEGORIES',
          field: 'id'
      }
      });
},   


  async down (queryInterface, Sequelize) {},
}
