
class DateUtils{

    isIntersectWith(inputedPeriod,reservationPeriod){
        let mostLaterStart;
        let mostEarlyEnd;

        if (inputedPeriod.checkInDate.getTime() >= reservationPeriod.checkInDate.getTime()) {
            mostLaterStart = inputedPeriod.checkInDate;
        } else {
            mostLaterStart = reservationPeriod.checkInDate;
        }
        if (inputedPeriod.checkOutDate.getTime() >= reservationPeriod.checkOutDate.getTime()){
            mostEarlyEnd = reservationPeriod.checkOutDate;
        }else{
            mostEarlyEnd = inputedPeriod.checkOutDate;
        }
        return mostLaterStart.getTime() <= mostEarlyEnd.getTime();
    }

    getPeriodFrom(startDate,endDate){
        return {checkInDate: new Date(startDate), checkOutDate: new Date(endDate)};
    }
}
module.exports = new DateUtils();