
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Themes', [
      { theme: "История России" }, //1
      { theme: "Наука и технологии" },//2
      { theme: "Культура и искусство" },//3
      { theme: "География России" },//4
      { theme: "Спорт и достижения" },//5
      { theme: "Современная Россия" },//6
      { theme: "Кто в доме хозяин" },//7
      { theme: "Философия проспавшего" },//8
      { theme: "Неудачные законы физики" },//9
      { theme: "Как выжить без кофе в понедельник" },//10
      { theme: "Комнатные растения" },//11
      { theme: "Загадки вселенной" }//12
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Themes', null, {});
  }
};