function multisum(num) {
  let compiledNumber = 0;

  for (let sumIndex = 0; sumIndex <= num; sumIndex += 1) {
    if (sumIndex % 5 === 0) {
      compiledNumber += sumIndex;
    } else  if (sumIndex % 3 === 0) {
      compiledNumber += sumIndex;
    }
  }
  return compiledNumber;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
