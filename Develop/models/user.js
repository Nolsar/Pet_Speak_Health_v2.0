
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    uid: {
      type: DataTypes.STRING,
      // allowNull: false
    },

    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    // the last name connot be null
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }

  });
  
  return User;
};
