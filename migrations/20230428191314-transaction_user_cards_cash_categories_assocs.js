"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("transactions", {
      fields: ["userId"],
      type: "foreign key",
      name: "id_userId",
      references: {
        table: "users",
        field: "id",
      },
    });
    await queryInterface.addConstraint("transactions", {
      fields: ["transAccount"],
      type: "foreign key",
      name: "cash_transAccount",
      references: {
        table: "cash",
        field: "id",
      },
    });
    await queryInterface.addConstraint("transactions", {
      fields: ["transAccount"],
      type: "foreign key",
      name: "card_transAccount", //NAMANYA BEDAIN
      references: {
        table: "cards",
        field: "id",
      },
    });

    await queryInterface.addConstraint("transactions", {
      fields: ["transToAccount"],
      type: "foreign key",
      name: "cash_transToAccount",
      references: {
        table: "CASH",
        field: "id",
      },
    });
    await queryInterface.addConstraint("transactions", {
      fields: ["transToAccount"],
      type: "foreign key",
      name: "card_transToAccount", //NAMANYA BEDAIN
      references: {
        table: "CARDS",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {},
};
