function stringLength (string) {
  const arrayString = string.split('');
  const length = arrayString.length;
  if (length > 0 && length < 10) {
      return length;
    }
    throw 'String must be between 1 and 10 characters';
}

function stringReverse(string) {
  const stringReverse = string.split('').reverse().join('');
  return stringReverse;
}

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    const sum = this.a + this.b;
    return sum;
  }
  subtract() {
    const minus = this.a - this.b; 
    return minus;
  }
  multiply() {
    const product = this.a * this.b
    return product;
  }
  divide() {
    const quotient = this.a / this.b
    return quotient;
  }
}

function capitalize(string) {
  const capitalized = string.charAt(0).toUpperCase() + string.slice(1, string.length);
  return capitalized;
}

module.exports = { stringLength, stringReverse, Calculator, capitalize };