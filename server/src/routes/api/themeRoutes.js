const router = require("express").Router();
const {getThemes,getThemeQuestions} = require("../../controllers/themeController")

const authMiddleware = require("../../middlewares/authMiddleware");

router.get('/', authMiddleware, getThemes)
router.get("/:id", authMiddleware, getThemeQuestions);

module.exports = router;
