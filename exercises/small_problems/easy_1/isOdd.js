
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}


// These are the test cases
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


/*
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

// This is how LS made their code

*/
