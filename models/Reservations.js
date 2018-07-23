const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
    clientName: {type: String, required: true},
    clientPhone: {type: String, required: true},
    accommodation: {type: String, required: true},
    comfort: {type: String, required: true},
    checkInDate: {type: Date, required: true},
    checkOutDate: {type: Date, required: true},
});

const Reservations = mongoose.model('Reservations', ReservationSchema, 'reservations');

module.exports = Reservations;