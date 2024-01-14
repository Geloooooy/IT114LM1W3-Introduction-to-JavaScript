/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log("The 1st number: " + numbers[0])
console.log("The 5th number: " + numbers[4])
console.log("The last number: " + numbers[numbers.length-1])
// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
var min = numbers[0];
var max = numbers[0];
var average = 0;

for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] < min) min = numbers[i];
    if(numbers[i] > max) max = numbers[i];
    average += numbers[i];
  }

  average /= numbers.length;
  
  console.log("Min is : " + min);
  console.log("Max is : " + max);
  console.log("Average is : " + average);
  
// Checkpoint 3.1 How would you compare numbers in python vs arrays in JavaScript
// Answer: In Python, compare numbers using standard comparison operators, while in JavaScript, compare arrays based on value equivalence by looping through elements or using methods like JSON.stringify().

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const info = {courseCode: "IT114L" , name: "Angelo Ebrada", units: 2 ,number_ofStudents: 39, prof_name:"Job Lipat" };

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
console.log("My Professor is Sir " + info.prof_name)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const coursesThisTerm = [
    {
        courseCode: "IT130",
        courseName: "DATA COMMUNICATIONS AND INTRODUCTION TO NETWORKING TECHNOLOGIES",
        units: 3,
    },
    {
        courseCode: "CS107",
        courseName: "INFORMATION MANAGEMENT",
        units: 2,
    },
    {
        courseCode: "CS107L",
        courseName: "INFORMATION MANAGEMENT (LABORATORY)",
        units: 1,
    },
    {
        courseCode: "HUM039",
        courseName: "ETHICS",
        units: 3,
    },
    {
        courseCode: "IT114",
        courseName: "WEB SYSTEMS AND TECHNOLOGIES",
        units: 2,
    },
    {
        courseCode: "IT114L",
        courseName: "WEB SYSTEMS AND TECHNOLOGIES (LABORATORY)",
        units: 1,
    },
    {
        courseCode: "IT132",
        courseName: "LOGIC DESIGN AND SWITCHING THEORY",
        units: 2,
    },  
    {
        courseCode: "IT132L",
        courseName: "LOGIC DESIGN AND SWITCHING (LABORATORY)",
        units: 1,
    },  
    {
        courseCode: "IT133",
        courseName: "TECHNOPRENEURSHIP",
        units: 3,
    }
  ];
  
// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
const totalunits = coursesThisTerm.reduce(function(accumulator, course) {return accumulator + course.units;}, 0);
  
  console.log("Total units for this term:", totalunits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent of objects in Python is classes, and you can compare them using identity (is) for checking if they reference the same object or using the equality operator (==) to compare their attributes.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
additional_numbers = 69;
const newNumber = [...numbers, additional_numbers];

console.log(newNumber)
// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
const extractedInfo = [info].map(function(course) {
    const { courseCode, units } = course;
    return { courseCode, units };
  });
  
  console.log(extractedInfo);