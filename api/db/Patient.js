const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    password: String
});

module.exports = mongoose.model("patient", patientSchema);