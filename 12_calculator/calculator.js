const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(a, b) {
	return a + b
};

const multiply = function(a, b) {
  return a * b
};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(a, b) {
  if (a < 0) return -1;
  if (a === 0 || a === 1) return 1;
  let result = 1;
  for (let i=2; i <= a; i++) {
    result *= i;
  }
  return result;
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
