const palindromes = function (givenString) {
    const re = /[\W_]/g;
    givenString = givenString.toLowerCase().replace(re, '');

    const reverseString = givenString.split('').reverse().join('');

    return reverseString === givenString;
};

// Do not edit below this line
module.exports = palindromes;
