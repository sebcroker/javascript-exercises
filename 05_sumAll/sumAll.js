/**Implement a function that takes two positive integers
 * and returns the sum of every integer between (and including) them */

const sumAll = function(int_1, int_2) {
    if (int_1 % 1 !== 0 || int_2 % 1 !== 0) {
        return "ERROR";
    } else if (int_1 < 0 || int_2 < 0) {
        return "ERROR";
    } else if (typeof int_1 !== "number" || typeof int_2 !== "number") {
        return "ERROR";
    }

    /**To check if the numbers are ordered, the below if/else block is given */
    let hold_int1 = int_1, hold_int2 = int_2;
    if (hold_int1 > hold_int2) {
        int_1 = int_2, int_2 = hold_int1;
    }

    /**Edge cases now taken care of */
    let sum = 0;
    for (let counter = int_1; counter <= int_2; counter++) {
        sum += counter;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
