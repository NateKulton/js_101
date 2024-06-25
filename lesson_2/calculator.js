// ask the user for the first number
// ask the user for the second number
// ask the usre for the operation
// perform the operation
// display the rssult of the operation

const readline = require('readline-sync');
const jsonMessages = require('./calculator_messages.json')

let doAgain;

do {

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(jsonMessages['welcome']);

prompt(jsonMessages['num1']);
let firstNumber = readline.question();

while (invalidNumber(firstNumber)) {
  prompt(jsonMessages['invalidInput']);
  firstNumber = readline.question();
}

prompt(jsonMessages['num2']);
let secondNumber = readline.question();

while (invalidNumber(secondNumber)) {
  prompt(jsonMessages['invalidInput']);
  secondNumber = readline.question();
}

prompt(jsonMessages['mathOps']);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(jsonMessages['mathWarning']);
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

prompt(jsonMessages['result'] + `${output}`);

prompt(jsonMessages['doMore']);
let timesToDo = readline.question();
doAgain = timesToDo.trimStart().toLowerCase();

} while (doAgain === 'yes')
