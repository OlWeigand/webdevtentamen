'use strict';
module.exports = (sequelize, DataTypes) => {
  const FoundObject = sequelize.define('FoundObject', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    foundtime: DataTypes.DATE,
    picture: DataTypes.STRING
  }, {});
  FoundObject.associate = function(models) {
    // associations can be defined here
  };
  return FoundObject;
};