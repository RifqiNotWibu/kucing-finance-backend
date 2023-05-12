"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("cash", {
      fields: ["userId"],
      type: "foreign key",
      name: "cash_users_assoc",
      references: {
        table: "users",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("cash", {
      fields: ["userId"],
      type: "foreign key",
      name: "cash_users_assoc",
      references: {
        table: "users",
        field: "id",
      },
    });
  },
};
