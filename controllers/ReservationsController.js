const Reservations = require('../models/Reservations');

class ReservationsController  {
    find() {
        return Reservations.find()
    }

    findBy(filters){
        return Reservations.find(filters).sort({checkInDate: 'asc'});
    }

    create (reservation) {
        return Reservations.create(reservation)
    }

    removeById(id){
        return Reservations.findByIdAndRemove(id);
    }

    updateById(id,reservation){
        return Reservations.findByIdAndUpdate(id,reservation,{new:true})
    }
};

module.exports = new ReservationsController();