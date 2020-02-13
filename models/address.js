'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    line1: DataTypes.STRING,
    line2: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};