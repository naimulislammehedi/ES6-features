// ES6 (ECMAScript 2015) Features 
// ES6 introduced many modern JavaScript features that make code cleaner, more powerful, and easier to maintain 

// let and const 
// Block-scope variable declarations 

let age = 25; 
const PI = 3.14; 

age = 26; // allowed 
// PI = 3.15; // Error

// Arrow Functions (=>): Shorter syntax for functions 
const add = (a, b) => a + a; 
console.log(add(2, 3))

//  Template Literals: String interpolation using backticks (`)
const name = "John"; 
console.log(`Hello, ${name}!`); 
