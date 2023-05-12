"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("cards", {
      fields: ["userId"],
      type: "foreign key",
      name: "cards_users_assoc",
      references: {
        table: "users",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("cards", {
      fields: ["userId"],
      type: "foreign key",
      name: "cards_users_assoc",
      references: {
        table: "users",
        field: "id",
      },
    });
  },
};
