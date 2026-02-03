// Control Structures in JavaScript

// If-else statements
let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

// Switch statement
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Just another day.");
}

// For loop
console.log("For loop:");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
console.log("While loop:");
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// For-of loop (for arrays)
let fruits = ["apple", "banana", "cherry"];
console.log("For-of loop:");
for (let fruit of fruits) {
    console.log(fruit);
}

// For-in loop (for objects)
let person = { name: "John", age: 30, city: "New York" };
console.log("For-in loop:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}