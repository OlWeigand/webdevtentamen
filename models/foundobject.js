'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoundObject = sequelize.define('FoundObject', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2500),
    location: DataTypes.STRING,
    foundtime: DataTypes.DATE,
    picture: DataTypes.STRING
  }, {});
  FoundObject.associate = function(models) {
    FoundObject.belongsTo(models.User)
  };
  return FoundObject;
};