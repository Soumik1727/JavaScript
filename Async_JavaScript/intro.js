// Synchronous JavaScript

// JavaScript is a single threaded language which means JS executes line by line

console.log("One");
console.log("Two");

setTimeout(() => {
    console.log("The asynchronus function is fired!");
}, 3000);
console.log("Three");
console.log("Four");

// Asynchronous JavaScript

// Defination: Start something now and finish later
