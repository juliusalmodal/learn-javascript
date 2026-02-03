// Functions in JavaScript

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function (ES6+)
const multiply = (a, b) => a * b;

// Function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// Higher-order function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

console.log(greet("World"));
console.log("2 + 3 =", add(2, 3));
console.log("4 * 5 =", multiply(4, 5));
console.log("3^4 =", power(3, 4));
console.log("Apply add:", applyOperation(10, 5, add));