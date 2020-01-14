'use strict';
const User = UserModel(sequelize, Sequelize);
module.exports = (sequelize, DataTypes) => {
  const Forumpost = sequelize.define('Forumpost', {
    name: DataTypes.STRING,
    body: DataTypes.STRING(2500),
    user: DataTypes.INTEGER.belongsTo(User),
    timestamp: DataTypes.DATE
  }, {});
  Forumpost.associate = function(models) {
    // associations can be defined here
  };
  return Forumpost;
};