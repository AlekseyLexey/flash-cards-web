'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Point.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });

      Point.belongsTo(models.Theme, {
        foreignKey: 'theme_id',
        as: 'theme_point'
      });
    }
  }
  Point.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    total_points: DataTypes.INTEGER,
    first_time: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};