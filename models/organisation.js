'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organisation = sequelize.define('Organisation', {
    orgName: DataTypes.STRING
  }, {});
  Organisation.associate = function(models) {
    // associations can be defined here
  };
  return Organisation;
};