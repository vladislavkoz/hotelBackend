const mongoose = require('mongoose');
const ApartmentSchema = new mongoose.Schema({
    accommodation: {type: String, required: true},
    comfort: {type: String, required: true}
});

const Apartments = mongoose.model('Apartments', ApartmentSchema, 'apartments');

module.exports = Apartments;