const pet = require("./pet");
module.exports = function(sequelize, DataTypes) {
    var Clients = sequelize.define("Clients", {

      // complete: DataTypes.BOOLEAN,

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      first_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      // the last name connot be null
      last_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      // the address name connot be null
      address: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
  
      city: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
  
      state: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
  
      zipcode: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
  
      cell_phone: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
      },
  
      house_phone: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
      },
  
      work_phone: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
      },
    });
    
    // clients.hasMany(pet);
    return Clients;
  };
  
  