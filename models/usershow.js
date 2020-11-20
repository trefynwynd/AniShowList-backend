'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userShow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.userShow.belongsTo(models.user)
    }
  };
  userShow.init({
    userId: DataTypes.INTEGER,
    apiId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userShow',
  });
  return userShow;
};