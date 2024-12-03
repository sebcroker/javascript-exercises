const reverseString = function(string) {
    let baseString = "";
    for (let counter = string.length - 1; counter >= 0; counter--) {
        baseString += string[counter];
    }
    return baseString;
};

// Do not edit below this line
module.exports = reverseString;
