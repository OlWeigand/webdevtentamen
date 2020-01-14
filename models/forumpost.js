'use strict';
module.exports = (sequelize, DataTypes) => {
  const Forumpost = sequelize.define('Forumpost', {
    name: DataTypes.STRING,
    body: DataTypes.STRING(2500),
    timestamp: DataTypes.DATE
  }, {});
  Forumpost.associate = function(models) {
    Forumpost.belongsTo(models.User);
    Forumpost.hasMany(models.Comment);
  };
  return Forumpost;
};