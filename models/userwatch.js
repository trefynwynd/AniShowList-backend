'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userWatch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.userWatch.belongsToMany(models.user)
    }
  };
  userWatch.init({
    userId: DataTypes.INTEGER,
    apiId: DataTypes.INTEGER,
    watching: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userWatch',
  });
  return userWatch;
};