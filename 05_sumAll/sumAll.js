const sumAll = function (number1, number2) {
    let sum = 0;

    if ((number1 < 0 || number2 < 0) ||
        (typeof (number1) !== 'number' || typeof (number2) !== 'number')) {
        sum = 'ERROR';
    } else if (number1 < number2) {
        while (number1 <= number2) {
            sum += number1;
            number1++;
        }
    } else {
        while (number1 >= number2) {
            sum += number1;
            number1--;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
