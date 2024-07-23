function utf16Value(word) {
  let stackNum = 0;

  for (let index = 0; index < word.length; index += 1) {
    stackNum += word.charCodeAt(index);
  }
  return stackNum;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA) + utf16Value(OMEGA) + utf16Value(OMEGA));  // 2811
