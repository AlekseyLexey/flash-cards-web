const router = require("express").Router();
const { addPoint, getPoints } = require("../../controllers/pointController");

const authMiddleware = require("../../middlewares/authMiddleware");

router.post("/", authMiddleware, addPoint);

router.get("/:id", authMiddleware, getPoints);

module.exports = router;
