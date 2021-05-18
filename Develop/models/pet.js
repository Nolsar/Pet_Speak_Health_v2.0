module.exports = function(sequelize, DataTypes) {
    var  Pets = sequelize.define("Pets", {
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      // the last name connot be null
      birthdate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // the address name connot be null
      breed: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
  
      color: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
  
      animal_type: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
  
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    } 
    });

    // Pets.associate = function(models){
    //     Pets.belongsTo(models.Clients, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    
    return Pets;
  };