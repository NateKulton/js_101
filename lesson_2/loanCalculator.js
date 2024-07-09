// loanA, is loan amount
// rate, is monthly interest rate
// loanD, is loan durartion in months
// I wanted to name these better but eslint wanted them to  shorter names
const readline = require('readline-sync');
const FILE_MESSAGES = require('./loan_messages.json');

function prompt(msg) {
  console.log(`-> ${msg}`);
}

prompt(FILE_MESSAGES['welcome']);

prompt(FILE_MESSAGES['loanAmount']);
let loanAmount = readline.question();

prompt(FILE_MESSAGES['APR']);
let apr = readline.question();

prompt(FILE_MESSAGES['monthOrYear']);
let monthOrYear = readline.question();

prompt(FILE_MESSAGES['loanDuration']);
let loanTerm = readline.question();

if (monthOrYear === 'y') {
  loanY(loanAmount, apr, loanTerm);
} else if (monthOrYear === 'm') {
  loanM(loanAmount, apr, loanTerm);
} else {
  console.log(`YOU DIDN'T TYPE m OR y!`);
  // invoke a while loop in here if the user doesn't input m or y
}

function loanY(loanA, rate, loanD) {
  loanD *= 12;
  let pay = Number(loanA) * ((Number(rate) / 12) / (1 - Math.pow((1 + (Number(rate) / 12)), (Number(-loanD)))));
  prompt(pay);
}


function loanM(loanA, rate, loanD) {
  let pay = Number(loanA) * ((Number(rate) / 12) / (1 - Math.pow((1 + (Number(rate) / 12)), (Number(-loanD)))));
  prompt(pay);
}

