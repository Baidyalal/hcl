const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
    doc: String,
    patient: String,
    app: String
});

module.exports = mongoose.model("slots", slotSchema);