const Apartments = require('../models/Apartments');
const ApartmentService = require('../apartmentService/ApartmentService');

class ReservationsController {
    find() {
        return Apartments.find()
    }

    async findBy(filters) {
        return ApartmentService.getFreeApartments(filters);
    }

    create(apartment) {
        return Apartments.create(apartment)
    }

    removeById(id) {
        return Apartments.findByIdAndRemove(id);
    }

};

module.exports = new ReservationsController();