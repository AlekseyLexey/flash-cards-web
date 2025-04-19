'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      // Вопросы по истории
      {
        question: 'Кто был первым президентом России?',
        answer: 'Борис Ельцин',
        theme_id: 1,
      },
      {
        question: 'В каком году началась Вторая мировая война?',
        answer: '1939',
        theme_id: 1,
      },
      
      // Вопросы по науке
      {
        question: 'Какой химический элемент обозначается как "Au"?',
        answer: 'Золото',
        theme_id: 2,
      },
      {
        question: 'Сколько планет в Солнечной системе?',
        answer: '8',
        theme_id: 2,
      },
      
      // Вопросы по искусству
      {
        question: 'Кто написал картину "Черный квадрат"?',
        answer: 'Казимир Малевич',
        theme_id: 3,
      },
      {
        question: 'Какой композитор написал "Лунную сонату"?',
        answer: 'Людвиг ван Бетховен',
        theme_id: 3,
      },
      
      // Вопросы по географии
      {
        question: 'Какая самая длинная река в мире?',
        answer: 'Нил',
        theme_id: 4,
      },
      {
        question: 'Столица Австралии?',
        answer: 'Канберра',
        theme_id: 4,
      },
      
      // Вопросы по спорту
      {
        question: 'В каком виде спорта используется шайба?',
        answer: 'Хоккей',
        theme_id: 5,
      },
      {
        question: 'Сколько игроков в баскетбольной команде на площадке?',
        answer: '5',
        theme_id: 5,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};