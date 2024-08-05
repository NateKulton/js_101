function penultimate(str) {
  let wordsArray = str.split(' ');
  let secondToLastWord = wordsArray.length - 2;

  return wordsArray[secondToLastWord];
}


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
