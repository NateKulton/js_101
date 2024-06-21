// Create a simple tip calculator.
// The program should prompt for a bill amount and a tip rate.
// The program must compute the tip,
// and then log both the tip and the total amount of the bill to the console.
// You can ignore input validation and assume that the user will enter numbers.

// So we need to ask the user for the bill amount
// The tip rate they are using
// Then we need to log the tip and the total of the bill

// START;
// toUser: 'what is the bill?';
// set answer as bill;
// toUser: 'what is the tip rate?';
// set answer as tip rate;
// bill * tip rate = tip;
// bill + tip = total;
// output: tip
// output: total;
// END;

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(`What is the bill?`);
let bill = readline.question();

prompt(`What is the tip percentage?`);
let tipRate = readline.question();

let tip = Number(bill) * (Number(tipRate) / 100);
prompt(`The tip is $${tip.toFixed(2)}`);
let total = Number(tip) + Number(bill);

prompt(`The total is $${total.toFixed(2)}`);
