'use strict';
const User = UserModel(sequelize, Sequelize);
module.exports = (sequelize, DataTypes) => {
  const Object = sequelize.define('Object', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2500),
    location: DataTypes.STRING,
    foundtime: DataTypes.DATE,
    foundby: DataTypes.INTEGER.belongsTo(User),
    picture: DataTypes.STRING
  }, {});
  Object.associate = function(models) {
    // associations can be defined here
  };
  return Object;
};