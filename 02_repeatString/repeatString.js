const repeatString = function (string, num) {
    let result = '';
    let start = 1;

    if (num < 0) {
        result += 'ERROR'
    } else {
        while (start <= num) {
            result += string;
            start++;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
