// gitTesting.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Example usage
console.log("Add: ", add(5, 3)); // Output: 8
console.log("Subtract: ", subtract(5, 3)); // Output: 2
console.log("Multiply: ", multiply(5, 3)); // Output: 15
console.log("Divide: ", divide(5, 3)); // Output: 1.666...