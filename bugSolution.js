function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return Infinity; // Return Infinity for division by zero
  }
  return a / b;
}

const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

function calculate(expression) {
  const parts = expression.split(' ');
  if (parts.length !== 3) {
    return NaN; // Handle incorrect number of parts
  }
  const [a, operator, b] = parts;
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    return NaN; // Handle non-numeric inputs
  }
  const operation = operations[operator];
  if (!operation) {
    return NaN; // Handle invalid operator
  }
  return operation(numA, numB);
}

console.log(calculate('2 + 2')); // 4
console.log(calculate('10 / 2')); // 5
console.log(calculate('5 * 3')); // 15
console.log(calculate('7 - 4')); // 3
console.log(calculate('10 / 0')); // Infinity
console.log(calculate('hello + world')); // NaN
console.log(calculate('10 +')); // NaN