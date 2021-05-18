const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  email: {
    type: String,
    allowNull: false,
    unique: true,
  },
  first_name: {
    type: String,
    allowNull: false,
  },
  // the last name connot be null
  last_name: {
    type: String,
    allowNull: false,
  },
  // the address name connot be null
  address: {
    type: String,
    allowNull: false,
  },

  city: {
    type: String,
    allowNull: false,
  },

  state: {
    type: String,
    allowNull: false,
  },

  zipcode: {
    type: String,
    allowNull: false,
  },

  cell_phone: {
    type: Number,
    allowNull: true,
  },

  house_phone: {
    type: Number,
    allowNull: true,
  },

  work_phone: {
    type: Number,
    allowNull: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;