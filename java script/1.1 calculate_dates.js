const date1 = new Date(2024, 11, 1);
const date2 = new Date(2024, 11, 12);

Date.prototype.daysTo = function (endDate) {

    const startMills = this.getTime();
    const endMills = endDate.getTime();

    const differenceMills = endMills - startMills;

    return Math.floor(differenceMills / (1000 * 60 * 60 * 24));
};

const daysDifference = date1.daysTo(date2);

console.log(daysDifference);