'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Theme.hasMany(models.Point, {
        foreignKey: 'theme_id',
        as: 'theme_point'
      });

      Theme.hasMany(models.Question, {
        foreignKey: 'theme_id',
        as: 'theme_question'
      });
    }
  }
  Theme.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    theme: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};