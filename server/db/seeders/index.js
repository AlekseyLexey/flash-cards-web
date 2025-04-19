'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const files = fs.readdirSync(__dirname)
      .filter(file => file !== 'index.js' && file.endsWith('.js'))
      .sort((a, b) => {
        // Сначала выполняем theme-seeds, затем question-seeds
        if (a.includes('theme') && !b.includes('theme')) return -1;
        if (!a.includes('theme') && b.includes('theme')) return 1;
        return 0;
      });

    for (const file of files) {
      const seed = require(path.join(__dirname, file));
      await seed.up(queryInterface, Sequelize);
    }
  },

  async down(queryInterface, Sequelize) {
    const files = fs.readdirSync(__dirname)
      .filter(file => file !== 'index.js' && file.endsWith('.js'))
      .sort((a, b) => {
        // Обратный порядок для отката
        if (a.includes('theme') && !b.includes('theme')) return 1;
        if (!a.includes('theme') && b.includes('theme')) return -1;
        return 0;
      });

    for (const file of files) {
      const seed = require(path.join(__dirname, file));
      await seed.down(queryInterface, Sequelize);
    }
  }
};