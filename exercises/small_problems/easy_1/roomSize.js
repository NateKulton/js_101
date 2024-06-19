// Build a program that asks the user to enter the length and width
// of a room in meters, and then logs the area of the room to the
// console in both square meters and square feet.
// Note: 1 square meter == 10.7639 square feet

// We need to ask the user for the length then after that we need
// to ask them again for another width
// Then we need to log square meters and feet of doing some math
// on the given values

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('What is the length of the room in meters?');
let num1 = readline.question();

prompt('Also, what is the width of the room in meters?');
let num2 = readline.question();

let squareMetersNoDecimalPoint = num1 * num2;
let squareMeters = squareMetersNoDecimalPoint.toFixed(2);
let squareFeet = squareMeters * 10.7639;

prompt(`The room is ${squareMeters} square meters (or ${squareFeet} square feet).`);
