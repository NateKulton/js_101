const readline = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

prompt('Enter the first number:');
let strNumOne = readline.question();
let numOne = Number(strNumOne);

prompt('Enter the second number');
let strNumTwo = readline.question();
let numTwo = Number(strNumTwo);

let doMath = 'MATH ON!';


switch (doMath) {
  case 'MATH ON!':
    prompt( `${numOne} + ${numTwo} = ` + (numOne + numTwo));
    prompt( `${numOne} - ${numTwo} = ` + (numOne - numTwo));
    prompt( `${numOne} * ${numTwo} = ` + (numOne * numTwo));
    prompt( `${numOne} / ${numTwo} = ` + (numOne / numTwo));
    prompt( `${numOne} % ${numTwo} = ` + (numOne % numTwo));
    prompt( `${numOne} ** ${numTwo} = ` + (numOne ** numTwo));
}

