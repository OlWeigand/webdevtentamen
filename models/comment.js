'use strict';
const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING(2500),
    user: DataTypes.INTEGER.belongsTo(User),
    timestamp: DataTypes.DATE,
    post: DataTypes.INTEGER.belongsTo(Post)
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};