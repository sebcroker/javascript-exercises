const removeFromArray = function(...args) {
    /**Need to remove args[1], args[2] and so on from the args[0] array 
     * The ...args is the rest parameter, accepting any number of parameters as an argument and turning it
     * Into an array of the parameters within it
    */
   let removedArray = args[0];
    for (let counter = 1; counter < args.length; counter++) {
        removedArray = removedArray.filter((element) => element !== args[counter]);
    }
    /**The filter() method takes a callback function, where filter iterates through the array (my understanding)
     * If the function returns a true value for that element, then the element that is being checked is kept. 
     * If not then left out (inc. undefined)
     */

    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
