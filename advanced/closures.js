// Closures in JavaScript

// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.

// Simple closure example
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer variable:', outerVariable);
        console.log('Inner variable:', innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside'); // Logs: Outer variable: outside, Inner variable: inside

// Closure for data privacy
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log('Count:', counter.getCount()); // 0
counter.increment();
counter.increment();
console.log('Count after increments:', counter.getCount()); // 2
counter.decrement();
console.log('Count after decrement:', counter.getCount()); // 1

// Closure in loops (common gotcha)
function createFunctions() {
    let functions = [];

    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log('Function', i);
        });
    }

    return functions;
}

const funcs = createFunctions();
funcs[0](); // Function 0
funcs[1](); // Function 1
funcs[2](); // Function 2

// If we used 'var' instead of 'let', all would log 'Function 3' due to hoisting