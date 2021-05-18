module.exports = function(sequelize, DataTypes) {
    var Medical_Records  = sequelize.define("Medical_Records", {
      pet_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // the last name connot be null
      vaccine_records: {
        type: DataTypes.ENUM({
            values: [
                'Rabies',
                'DAPP',
                'Bordetella',
                'Leptospirosis',
                'Lyme',
                'Influenza' 
            ]
        }),
        allowNull: false,
      },
      // the address name connot be null
      medication_list: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
  
      physical_exam: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
  
      client_education: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });


//     pet_id INT NOT NULL,
//   vaccine_records ENUM(
//     'Rabies',
//     'DAPP',
//     'Bordetella',
//     'Leptospirosis',
//     'Lyme',
//     'Influenza'
//   ),
//   medication_list MEDIUMTEXT NULL,
//   physical_exam MEDIUMTEXT NULL,
//   client_education MEDIUMTEXT NULL,

    // Pets.associate = function(models){
    //     Pets.belongsTo(models.Clients, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    
    return Medical_Records;
  };