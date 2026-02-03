// Objects and Arrays in JavaScript

// Arrays
let numbers = [1, 2, 3, 4, 5];

// Array methods
numbers.push(6); // Add to end
numbers.unshift(0); // Add to beginning
numbers.pop(); // Remove from end
numbers.shift(); // Remove from beginning

console.log("Array:", numbers);
console.log("Length:", numbers.length);
console.log("Index 2:", numbers[2]);

// Array iteration
numbers.forEach(num => console.log("ForEach:", num));
let doubled = numbers.map(num => num * 2);
console.log("Mapped (doubled):", doubled);
let evens = numbers.filter(num => num % 2 === 0);
console.log("Filtered (evens):", evens);

// Objects
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    features: ["AC", "Bluetooth", "GPS"]
};

// Accessing properties
console.log("Make:", car.make);
console.log("Model:", car["model"]);

// Adding/modifying properties
car.color = "Blue";
car.year = 2021;

// Object methods
console.log("Keys:", Object.keys(car));
console.log("Values:", Object.values(car));

// Destructuring
let { make, model } = car;
console.log("Destructured:", make, model);

// Spread operator
let newCar = { ...car, mileage: 15000 };
console.log("New car:", newCar);