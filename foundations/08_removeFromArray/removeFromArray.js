const removeFromArray = function(arr, ...rest) {
    return arr.filter((val) => !rest.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
