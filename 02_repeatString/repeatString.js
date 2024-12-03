const repeatString = function(string, num) {
    let baseString = string; //declaring a baseString so as to not exponentiate the concatenation of the strings.
    if (num == 0) {
        return "";
    } else if (num < 0) {
        return "ERROR";
    } else {
        for (let counter = 1; counter < num; counter++) {
            string += baseString;
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
