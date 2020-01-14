'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING(2500),
    timestamp: DataTypes.DATE
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Forumpost);
    Comment.belongsTo(models.User);
  };
  return Comment;
};