'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('pessoas', {
      name: 'unique_cpf',
      type: 'UNIQUE',
      fields: ['cpf']
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('pessoas', 'unique_cpf');
  }
};