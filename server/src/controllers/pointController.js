const { createPoint, point } = require("../services/pointService");

async function addPoint(req, res, next) {
  try {
    const newPoint = req.body;

    const point = await createPoint(newPoint);

    res.status(200).json(point);
  } catch (error) {
    next(error);
  }
}

async function getPoints(req, res, next) {
  try {
    const { id } = req.params;

    const points = await point(id);

    res.status(200).json(points);
  } catch (error) {
    next(error);
  }
}

module.exports = { addPoint, getPoints };
