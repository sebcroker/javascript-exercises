/**Leap years are years divisible by four, but not divisible by 100 unless they are also divisible by 400. */

const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
