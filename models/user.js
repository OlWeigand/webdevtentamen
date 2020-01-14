'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    pin: DataTypes.INTEGER,
    role: DataTypes.INTEGER,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    postcode: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.FoundObject);
    User.hasMany(models.Forumpost);
    User.hasMany(models.Comment);
  };
  return User;
};