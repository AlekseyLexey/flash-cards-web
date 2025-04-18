const router = require("express").Router();
// const {
//   registration,
//   login,
//   logout,
//   refresh,
// } = require("../controllers/userController");

const authMiddleware = require("../middlewares/authMiddleware");

// router.get('/', authMiddleware, logout)
// router.get("/:id", authMiddleware, refresh);

module.exports = router;
