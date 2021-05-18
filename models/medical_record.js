const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MRSchema = new Schema({
    pet_id: {
        type: Number,
        allowNull: false,
    },
    // the last name connot be null
    vaccine_records: {
        enum: ({
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
        type: String,
        allowNull: false,
    },

    physical_exam: {
        type: String,
        allowNull: true,
    },

    client_education: {
        type: String,
        allowNull: false,
    },
});


const MedicalRecord = mongoose.model("Medical_Records", MRSchema);

module.exports = MedicalRecord;