// app.js

// import the calculator module
const calculator = require('./calculator');

// calculate the sum of 2 nos
const sum = calculator.sum(10, 20);
console.log(`The sum of 10 and 20 is: ${sum}`);

// example of using the difference function
const difference = calculator.difference(10, 20);
console.log(`The difference between 10 and 20 is: ${difference}`);

// example usage of the product function
const num1 = 10;
const num2 = 5;

console.log(`Product: ${calculator.product(num1, num2)}`);

// example usage of the quotient function
const quotient = calculator.quotient(10, 2);
console.log(`The quotient of 10 and 2 is: ${quotient}`);