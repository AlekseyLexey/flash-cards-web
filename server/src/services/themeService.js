const { Theme, Question } = require("../../db/models");
const HttpError = require("../exceptions/HttpError");

const themesAll = async () => {
  const data = await Theme.findAll({ attributes: ["id", "theme"] });

  return data;
};

const themeQuestions = async (theme_id) => {
  const data = await Theme.findAll({
    where: { id: +theme_id },
    attributes: ["id", "theme"],
    include: [
      {
        model: Question,
        as: "theme_question",
        attributes: ["question", "answer"],
      },
    ],
  });

  return data[0];
};

module.exports = { themesAll, themeQuestions };
