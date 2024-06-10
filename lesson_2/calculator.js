// ask the user for the first number
// ask the user for the second number
// ask the usre for the operation
// perform the operation
// display the rssult of the operation

const readline = require('readline-sync');

console.log("Welcome to the Calculator!");

console.log("What is the first number?");
let firstNumber = readline.question();

console.log("What is the second number?");
let secondNumber = readline.question();

console.log(`${firstNumber} ${secondNumber}`);

console.log("What is the operation would you like to perform\n1) Add 2) Subtract 3) Multiply 4) Divide?");
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(firstNumber) + Number(secondNumber);
} else if (operation === '2') {
  output = output = Number(firstNumber) - Number(secondNumber);
} else if (operation === '3') {
  output = output = Number(firstNumber) * Number(secondNumber);
} else if (operation === '4'){
  output = output = Number(firstNumber) / Number(secondNumber);
}

console.log(`The result is ${output}`);
