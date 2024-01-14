/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/


// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var a = 69

console.log(a)
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let b = 11

console.log(b)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const c = 1 + 2 + 3 + 4

console.log(c)
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: Use var if you want function-scoped variables that can be hoisted. Use let if you want block-scoped variables that can be reassigned. Use const if you want block-scoped variables that are constant and cannot be reassigned.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators


// Checkpoint 1.2 What operators did you use?
// Answer: Remainder
// Your code here
const d = 5 % 4
console.log(d)

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let string = "Angelo";
console.log(string + " Ebrada")


// Checkpoint 1.3 What operators did you use?
// Answer: String operators

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let Dog = true
let Cat = false

const o1 = true || true; 
const o2 = false || true; 
const o3 = false || false; 
const o4 = 3 > 4 || 3 === 4; 
const o5 = Cat || Dog; 
const o6 = Cat || Cat; 
const o7 = Dog || Dog; 

console.log(o1)
console.log(o2)
console.log(o3)
console.log(o4)
console.log(o5)
console.log(o6)
console.log(o7)

// Checkpoint 1.4 What operators did you use?
// Answer: Logical OR


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: java doesnt check the type of the brackets
// Your code here
const x = 31;
const y= 24;
const z = 53;

console.log(x + (y * z))   
console.log(x + (y + z))   
console.log((x + y) * z)   
console.log((x * z) + (y * z)) 