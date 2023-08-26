const removeFromArray = function () {
    let arr = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arr.includes(arguments[i])) {
            arr = arr.filter(item => item !== arguments[i]);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
