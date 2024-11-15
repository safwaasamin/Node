//calculator.js

// Function to calculate the sum of 2 nos
function sum(a, b) {
    return a + b;
}

// Function to calculate the diff of 2 nos
function difference(a,b) {
    return a - b;
}

// Function to calculate the product of 2 nos
function product(a,b) {
    return a * b;
}

// Function to calculate the quotient of 2 nos
function quotient(a,b) {
    return a / b;
}

// Export the functions so they can be used in other files
module.exports = {
    sum,
    difference,
    product,
    quotient
};
