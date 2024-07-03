// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the rssult of the operation

// I didn't write notes when I was working on the
// json file stuff, because I didn't know if I could comment in it
// or not. That is why I made the md file, but I started using that
// very late in this bonus feature

const LANGUAGE = 'en';
const readline = require('readline-sync');
const JSON_MESSAGES = require('./calculator_messages.json');

let stopMathLoop;


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function clearTerm() {
  console.clear();
}

function messages(message, lang = 'en') {
  return JSON_MESSAGES[lang][message];
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}
do {
  prompt(messages('welcome', LANGUAGE));

  prompt(messages('num1', LANGUAGE));
  let firstNumber = readline.question();

  while (invalidNumber(firstNumber)) {
    clearTerm();
    prompt(messages('invalidInput', LANGUAGE));
    firstNumber = readline.question();
  }

  prompt(messages('num2', LANGUAGE));
  let secondNumber = readline.question();

  while (invalidNumber(secondNumber)) {
    clearTerm();
    prompt(messages('invalidInput', LANGUAGE));
    secondNumber = readline.question();
  }

  prompt(messages('mathOps', LANGUAGE));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('mathWarning', LANGUAGE));
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

  prompt(messages('result', LANGUAGE) + `${output}`);

  prompt(messages('doMore', LANGUAGE));
  let timesToDo = readline.question();
  stopMathLoop = timesToDo.trimStart().toLowerCase();
  clearTerm();
} while (stopMathLoop !== 'y');
