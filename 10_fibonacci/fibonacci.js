const fibonacci = function(fibonacciNumber) {
    if (fibonacciNumber < 0) {
        return 'OOPS';
    }
    let prev2 = 0;
    let prev1 = 1;
    let curr;

    for (let i = 1; i <= fibonacciNumber; i++) {
        curr = prev2 + prev1;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev2;
};

// Do not edit below this line
module.exports = fibonacci;
