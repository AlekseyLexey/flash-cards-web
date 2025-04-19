'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Themes', [
      {
        theme: 'История',
      },
      {
        theme: 'Наука',
      },
      {
        theme: 'Искусство',
      },
      {
        theme: 'География',
      },
      {
        theme: 'Спорт',
      },
      {
        theme: 'Литература',
      },
      {
        theme: 'Кино',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Themes', null, {});
  }
};