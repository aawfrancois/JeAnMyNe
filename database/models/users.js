
module.exports = (sequelize, DataTypes) => {

  let users = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return users;
};
