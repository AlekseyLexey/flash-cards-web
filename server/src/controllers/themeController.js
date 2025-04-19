const { themesAll, themeQuestions } = require("../services/themeService");

async function getThemes(req, res, next) {
  try {
    const themes = await themesAll();

    res.status(200).json(themes);
  } catch (error) {
    next(error);
  }
}

async function getThemeQuestions(req, res, next) {
  try {
    const { id } = req.params;

    const questions = await themeQuestions(id);

    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
}

module.exports = { getThemes, getThemeQuestions };
