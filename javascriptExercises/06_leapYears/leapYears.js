const leapYears = function(yearToCheck) {

if (yearToCheck % 400 == 0) {
    return true;
} else if (yearToCheck % 100 == 0) {
    return false;
} else if (yearToCheck % 4 == 0) {
    return true;
} else {
    return false;
}


};

module.exports = leapYears;
