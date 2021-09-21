const calculator = require('./calculator');

describe('add', () => {
	test('adds 0 and 0', () => {
		expect(calculator.add(0,0)).toBe(0);
	});

	skip('adds 2 and 2', () => {
		expect(calculator.add(2,2)).toBe(4);
	});

	skip('adds positive numbers', () => {
		expect(calculator.add(2,6)).toBe(8);
	});
});

describe('subtract', () => {
	skip('subtracts numbers', () => {
		expect(calculator.subtract(10,4)).toBe(6);
	});
});

describe('sum', () => {
	skip('computes the sum of an empty array', () => {
		expect(calculator.sum([])).toBe(0);
	});

	skip('computes the sum of an array of one number', () => {
		expect(calculator.sum([7])).toBe(7);
	});

	skip('computes the sum of an array of two numbers', () => {
		expect(calculator.sum([7,11])).toBe(18);
	});

	skip('computes the sum of an array of many numbers', () => {
		expect(calculator.sum([1,3,5,7,9])).toBe(25);
	});
});

describe('multiply', () => {
	skip('multiplies two numbers', () => {
		expect(calculator.multiply([2,4])).toBe(8);
	});

	skip('multiplies several numbers', () => {
		expect(calculator.multiply([2,4,6,8,10,12,14])).toBe(645120);
	});
});

describe('power', () => {
	skip('raises one number to the power of another number', () => {
		expect(calculator.power(4,3)).toBe(64); // 4 to third power is 64
	});
});

describe('factorial', () => {
	skip('computes the factorial of 0', () => {
		expect(calculator.factorial(0)).toBe(1); // 0! = 1
	});

	skip('computes the factorial of 1', () => {
		expect(calculator.factorial(1)).toBe(1);
	});

	skip('computes the factorial of 2', () => {
		expect(calculator.factorial(2)).toBe(2);
	});

	skip('computes the factorial of 5', () => {
		expect(calculator.factorial(5)).toBe(120);
	});

	skip('computes the factorial of 10', () => {
		expect(calculator.factorial(10)).toBe(3628800);
	});
});
