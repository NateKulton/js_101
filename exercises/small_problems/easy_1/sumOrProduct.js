// Write a program that asks the user to enter an integer greater than 0 ,
// then asks whether the user wants to determine the sum or the
// product of all numbers between 1 and the entered integer, inclusive.
// LS quote

// I need to make it so the program only lets
// users input numbers greater than 0

// Then I need to ask the user what operation they want to do
// Sum or Product of the all the numbers between 1 and the input
// number in step one (including the including the input number)


// START:
// set readline;
// pile number;
// set message to the console;
// ask the user for a number;
// store user input;
// iterator = to user input;
// ask user for s or p as input
// set loop;
// loop till the iterator hits zero
// for each iteration of the loop add the value
//... of the iterator to the pile number
// END:

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`-> ${msg}`);
}

let sumNum = 0;
let productNum = 1;

prompt('Enter a number larger than 0');
let inputNum = readline.question();


prompt('Do you want the sum or the product of the input number? (s/p)');
let inputLetter = readline.question();


if (inputLetter === 's') {
  for (let sumIndex = Number(inputNum); sumIndex > 0; sumIndex -= 1) {
    sumNum += sumIndex;
  }
  prompt(`${sumNum} is the sum`);
}


if (inputLetter === 'p') {
  for (let proIndex = Number(inputNum); proIndex > 0; proIndex -= 1) {
    productNum *= proIndex;
  }
  prompt(`${productNum} is the product`);
}
