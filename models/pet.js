const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: {
        type: String,
        allowNull: false,
      },
      // the last name connot be null
      birthdate: {
        type: String,
        allowNull: false,
      },
      // the address name connot be null
      breed: {
        type: String,
        allowNull: false,
      },
  
      color: {
        type: String,
        allowNull: true,
      },
  
      animal_type: {
        type: String,
        allowNull: false,
      },
  
      client_id: {
        type: Number,
        allowNull: false,
    } 
    });

const Pet = mongoose.model("Pets", petSchema);

module.exports = Pet;


// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
// });

// const Book = mongoose.model("Book", bookSchema);

// module.exports = Book;
