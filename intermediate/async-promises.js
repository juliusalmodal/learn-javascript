// Asynchronous Programming with Promises in JavaScript

// Promises represent the eventual completion or failure of an async operation.

// Creating a Promise
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ms > 0) {
                resolve(`Delayed for ${ms} milliseconds`);
            } else {
                reject("Delay must be positive");
            }
        }, ms);
    });
}

// Using a Promise
delay(1000)
    .then(message => {
        console.log(message); // "Delayed for 1000 milliseconds"
        return delay(500);
    })
    .then(message => {
        console.log(message); // "Delayed for 500 milliseconds"
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Promise.all - Run multiple promises in parallel
const promise1 = delay(1000);
const promise2 = delay(1500);
const promise3 = delay(500);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.log("One promise failed:", error);
    });

// Promise.race - First promise to resolve/reject wins
Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log("First to resolve:", result);
    })
    .catch(error => {
        console.log("First to reject:", error);
    });

// Converting callback-based code to Promises
function readFileCallback(filename, callback) {
    // Simulate async file read
    setTimeout(() => {
        if (filename === "valid.txt") {
            callback(null, "File content");
        } else {
            callback("File not found", null);
        }
    }, 1000);
}

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        readFileCallback(filename, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromise("valid.txt")
    .then(content => console.log("File content:", content))
    .catch(error => console.log("Error:", error));