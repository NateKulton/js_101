// ask the user for the first number
// ask the user for the second number
// ask the usre for the operation
// perform the operation
// display the rssult of the operation

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to the Calculator!");

prompt("What is the first number?");
let firstNumber = readline.question();

while (invalidNumber(firstNumber)) {
  prompt('Sorry, that was an invalid number. Learn your lesson next time.');
  firstNumber = readline.question();
}

prompt("What is the second number?");
let secondNumber = readline.question();

while (invalidNumber(secondNumber)) {
  prompt('Sorry, that was an invalid number. Learn your lesson next time.');
  secondNumber = readline.question();
}

prompt("What is the operation would you like to perform\n1) Add 2) Subtract 3) Multiply 4) Divide?");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('You must choose 1, 2, 3, or 4!');
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(firstNumber) + Number(secondNumber);
    break;
  case '2':
    output = Number(firstNumber) - Number(secondNumber);
    break;
  case '3':
    output = Number(firstNumber) * Number(secondNumber);
    break;
  case '4':
    output = Number(firstNumber) / Number(secondNumber);
    break;
}

prompt(`The result is ${output}`);
