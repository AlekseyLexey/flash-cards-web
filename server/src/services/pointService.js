const {Point} = require("../../db/models");
const HttpError = require("../exceptions/HttpError");

const createPoint = async(pointData) => {

    const data = await Point.create(pointData);

    return data
}

const point = async(id) => {

    const data = await Point.findAll({
        where: { user_id: +id },
        include: [
          {
            as: 'theme_point',
            attributes: ['theme']
          }
        ],
        attributes: ['total_points', 'first_time'] 
      })

    return data
}

module.exports = { createPoint, point }