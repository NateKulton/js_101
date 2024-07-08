// loanA, is loan amount
// rate, is monthly interest rate
// loanD, is loan durartion in months
// I wanted to name these better but eslint wanted them to  shorter names
const readline = require('readline-sync');
const FILE_MESSAGES = ('./loan_messages.json');

function loanCalc(loanA, rate, loanD) {
  let pay = loanA * ((rate / 12) / (1 - Math.pow((1 + (rate / 12)), (-loanD))));
  return pay;
}

console.log(loanCalc(10000, 0.06, 12));
