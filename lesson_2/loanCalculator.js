// loanA is loan amount, rate is monthly interest rate, and
// loanD is loan durartion in months
// I wanted to names these better but eslint wanted them to too shorter names

function loanCalc(loanA, rate, loanD) {
  let pay = loanA * ((rate / 12) / (1 - Math.pow((1 + (rate / 12)), (-loanD))));
  return pay;
}

console.log(loanCalc(10000, 0.06, 12));
