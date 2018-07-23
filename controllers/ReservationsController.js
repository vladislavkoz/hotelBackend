const Reservations = require('../models/Reservations');

class ReservationsController  {
    find() {
        return Reservations.find()
    }

    create (reservation) {
        return Reservations.create(reservation)
    }

    findById(id){
        return Reservations.findById(id);
    }

    removeById(id){
        return Reservations.findByIdAndRemove(id);
    }

    updateById(id,reservation){
        return Reservations.findByIdAndUpdate(id,reservation,{new:true})
    }
};

module.exports = new ReservationsController();