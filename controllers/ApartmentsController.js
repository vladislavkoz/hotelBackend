const Apartments = require('../models/Apartments');

class ReservationsController  {
    find() {
        return Apartments.find()
    }

    create (apartment) {
        console.log(JSON.stringify(apartment));
        return Apartments.create(apartment)
    }

    removeById(id){
        return Apartments.findByIdAndRemove(id);
    }
};

module.exports = new ReservationsController();