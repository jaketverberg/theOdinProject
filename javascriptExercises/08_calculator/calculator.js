const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1]
};

const sum = function() {
	const argu = [...arguments];

  let answer = argu.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
    });
  
  return answer;
  };

const multiply = function() {
	const argu = [...arguments];
  
  let answer = argu.reduce((previousValue, currentValue) => {
    return previousValue * currentValue
    });
  
  return answer;
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);

};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
