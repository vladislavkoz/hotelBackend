const Apartments = require('../models/Apartments');

class ReservationsController  {
    find() {
        return Apartments.find()
    }

    create (reservation) {
        return Apartments.create(reservation)
    }

    removeById(id){
        return Apartments.findByIdAndRemove(id);
    }
};

module.exports = new ReservationsController();