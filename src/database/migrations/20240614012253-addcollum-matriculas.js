'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('matriculas', 'deleted_at', {
      allowNull: true,
      type: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matriculas', 'deleted_at');
  }
};