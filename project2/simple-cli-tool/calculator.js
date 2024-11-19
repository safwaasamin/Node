#!/usr/bin/env node


// Importing readline module for accepting user input
const readline = require('readline');

// Creating an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform basic calculations
const calculate = (num1, num2, operation) => {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
};

// Ask for first number
rl.question('Enter the first number: ', (firstNumber) => {
    firstNumber = parseFloat(firstNumber);

    // Ask for second number
    rl.question('Enter the second number: ', (secondNumber) => {
        secondNumber = parseFloat(secondNumber);

        // Ask for the operation
        rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
            const result = calculate(firstNumber, secondNumber, operation);
            console.log(`Result: ${result}`);
            rl.close(); // Close the readline interface
        });
    });
});
