const Reservations = require('../models/Reservations');
const DateUtils = require('../dateUtils/DateUtils');
const Apartments = require('../models/Apartments');

class ApartmentService {

    async getFreeApartments(filters) {
        let PeriodOfReservation = DateUtils.getPeriodFrom(filters.checkInDate, filters.checkOutDate);

        let reservedApartments = await this.getReservedApartmentsOnPeriod(PeriodOfReservation);

        let allApartments = await Apartments.find();

        await this.removeBusyApartmentsFromAll(allApartments, reservedApartments);

        return allApartments;
    }

    async removeBusyApartmentsFromAll(allApartments, reservedApartments) {
        for (let reservedApartment of reservedApartments) {
            for (let apartment of allApartments) {
                if (this.areTheSameApartments(apartment, reservedApartment)) {
                    if (apartment.count <= 1) {
                        allApartments.splice(allApartments.indexOf(apartment), 1);
                        delete reservedApartments[reservedApartments.indexOf(reservedApartment)];
                        break
                    } else {
                        --apartment.count;
                        delete reservedApartments[reservedApartments.indexOf(reservedApartment)];
                        break
                    }
                }
            }
        }
    }

    areTheSameApartments(firstApartment, secondApartment) {
        if (firstApartment.accommodation == secondApartment.accommodation) {
            if (firstApartment.comfort == secondApartment.comfort) {
                return true;
            }
        }
        return false;
    }

    async getReservedApartmentsOnPeriod(necessaryPeriod) {
        let reservations = await Reservations.find();
        let reservedApartments = [];
        for (let entity of reservations) {
            let period = {checkInDate: entity.checkInDate, checkOutDate: entity.checkOutDate};
            if (DateUtils.isIntersectWith(necessaryPeriod, period) === true) {
                reservedApartments.push({accommodation: entity.accommodation, comfort: entity.comfort});
            }
        }
        return reservedApartments;
    }

}

module.exports = new ApartmentService();