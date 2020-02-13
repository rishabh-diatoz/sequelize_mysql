'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.NUMBER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};