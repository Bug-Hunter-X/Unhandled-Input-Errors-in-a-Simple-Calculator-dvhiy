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
    throw new Error('Cannot divide by zero');
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
  const [a, operator, b] = expression.split(' ');
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input');
  }
  const operation = operations[operator];
  if (!operation) {
    throw new Error('Invalid operator');
  }
  return operation(numA, numB);
}

console.log(calculate('2 + 2')); // 4
console.log(calculate('10 / 2')); // 5
console.log(calculate('5 * 3')); // 15
console.log(calculate('7 - 4')); // 3
console.log(calculate('10 / 0'));// throws error
console.log(calculate('hello + world')); // throws error