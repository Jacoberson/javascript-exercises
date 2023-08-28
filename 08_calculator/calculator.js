const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let runningTotal = 1;

  while (num > 1) {
    runningTotal *= num;
    num--;
  }

  return runningTotal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
