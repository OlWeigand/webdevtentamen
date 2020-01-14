'use strict';
module.exports = (sequelize, DataTypes) => {
  const Forumpost = sequelize.define('Forumpost', {
    name: DataTypes.STRING,
    body: DataTypes.STRING,
    timestamp: DataTypes.DATE
  }, {});
  Forumpost.associate = function(models) {
    // associations can be defined here
  };
  return Forumpost;
};