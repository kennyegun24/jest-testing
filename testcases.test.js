const { stringLength, stringReverse, Calculator, capitalize } = require('./testcases.js');

describe('Practise tests for strings', () => {
  test('Return the length of string', () => {
    // Arrange
    const string = 'hello';
    // Act
    const result = stringLength(string);
    // Assert
    expect(result).toBe(5);
  });
});

describe('Assert if string is reversed', () => {
  test('reverse a string', () => {
    // Arrange
    const string = 'hello';
    // Act
    const result = stringReverse(string);
    // Assert
    expect(result).toBe('olleh');
  });
});

describe('Perform basic math expression on two numbers', () => {
  test('add two numbers', () => {
    // Arrange
    const a = 1;
    const b = 2;
    // Act
    const calculate = new Calculator(a, b);
    const result = calculate.add();
    // Assert
    expect(result).toBe(3);
  });

  test('subtract two numbers', () => {
    // Arrange
    const a = 2;
    const b = 1;
    // Act
    const calculate = new Calculator(a, b);
    const result = calculate.subtract();
    // Assert
    expect(result).toBe(1);
  });

  test('Multiply two numbers', () => {
    // Arrange
    const a = 2;
    const b = 1;
    // Act
    const calculate = new Calculator(a, b);
    const result = calculate.multiply();
    // Assert
    expect(result).toBe(2);
  });

  test('Divide two numbers', () => {
    // Arrange
    const a = 2;
    const b = 1;
    // Act
    const calculate = new Calculator(a, b);
    const result = calculate.divide();
    // Assert
    expect(result).toBe(2);
  });
});

describe('Assert if string is capitalized', () => {
  test('Parameter must be a string', () => {
    const string = 'hello';
    const type = typeof string;
    expect(type).toBe('string');
  });

  test('Is Parameter capitalized', () => {
    const string = 'hello';
    const result = capitalize(string);
    expect(result).toBe('Hello');
  });
});