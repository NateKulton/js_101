// loanA, is loan amount
// rate, is monthly interest rate
// loanD, is loan durartion in months
// I wanted to name these better but eslint wanted them to  shorter names
const readline = require('readline-sync');
const FILE_MESSAGES = require('./loan_messages.json');

function prompt(msg) {
  console.log(`-> ${msg}`);
}

function clearWindow() {
  console.clear();
}

function invalidNum(number) {
  return number.trim() === '' ||
         Number(number) <= 0   ||
         Number.isNaN(Number(number));
}

prompt(FILE_MESSAGES['welcome']);

prompt(FILE_MESSAGES['loanAmount']);
let loanAmount = readline.question();

while (invalidNum(loanAmount)) {
  clearWindow();
  prompt(FILE_MESSAGES['numberNeeded']);
  prompt(FILE_MESSAGES['loanAmount']);
  loanAmount = readline.question();
}

prompt(FILE_MESSAGES['APR']);
let apr = readline.question();

while (invalidNum(apr)) {
  clearWindow();
  prompt(FILE_MESSAGES['numberNeeded']);
  prompt(FILE_MESSAGES['APR']);
  apr = readline.question();
}

prompt(FILE_MESSAGES['monthYear']);
let monthOrYear = readline.question();

function notTheLetters(letter) {
  let letterCheck = letter.trimStart().toLowerCase();
  return !(letterCheck === 'm' || letterCheck === 'y');
}

while (notTheLetters(monthOrYear)) {
  clearWindow();
  prompt(FILE_MESSAGES['wrongInput']);
  prompt(FILE_MESSAGES['monthYear']);
  monthOrYear = readline.question();
}

prompt(FILE_MESSAGES['loanDuration']);
let loanTerm = readline.question();

while (invalidNum(loanTerm)) {
  clearWindow();
  prompt(FILE_MESSAGES['numberNeeded']);
  prompt(FILE_MESSAGES['loanDuration']);
  loanTerm = readline.question();
}

if (monthOrYear.toLowerCase() === 'y') {
  loanY(loanAmount, apr, loanTerm);
} else if (monthOrYear.toLowerCase() === 'm') {
  loanM(loanAmount, apr, loanTerm);
} else {
  prompt('IT seems like one of your inputs was invalid, oops!');
}

function loanY(loanA, rate, loanD) {
  loanD *= 12;
  rate /= 100;
  let pay = Number(loanA) * ((Number(rate) / 12) / (1 - Math.pow((1 + (Number(rate) / 12)), (Number(-loanD)))));
  prompt(pay.toFixed(2));
}


function loanM(loanA, rate, loanD) {
  rate /= 100;
  let pay = Number(loanA) * ((Number(rate) / 12) / (1 - Math.pow((1 + (Number(rate) / 12)), (Number(-loanD)))));
  prompt(pay.toFixed(2));
}
