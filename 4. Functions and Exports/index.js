/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
// Declare a function named 'greet'
function greet(name) {
    console.log("Hello, " + name + "! Nice to meet you ");
  }
  
  greet("Angelo Ebrada");
  
// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 
//A function declaration is defined using the function keyword and is hoisted, while a function expression involves assigning an anonymous or named function to a variable and is not hoisted.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function(length, width) {return length * width;};
  const area = calculateArea(10, 20);
  console.log("The area of the rectangle is:", area);
  

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function passed as an argument to another function, which is then invoked or executed inside the outer function. 
// It allows for asynchronous operations, event handling, and more, enhancing the flexibility of JavaScript. 
// For example, in the setTimeout function, the second argument is a callback function that will be executed after a specified time interval:
// setTimeout(function() {
//     console.log("This is a callback function executed after a delay.");}, 2000);
  

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(arr, modifierFunction) {
    return arr.map(modifierFunction);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const incrementByOne = function(number) {
    return number + 1;
  };
  
  const modifiedNumbers = modifyArray(numbers, incrementByOne);
  
  console.log("Original Numbers Array:", numbers);
  console.log("Modified Numbers Array:", modifiedNumbers);
  

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
// main.js
const { add, PI } = require("./mathUtils");

const sum = add(3, 6);
console.log("Sum:", sum);

console.log("Value of PI:", PI);



// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const isPalindrome = require("./isPalindrome");

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));


// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
