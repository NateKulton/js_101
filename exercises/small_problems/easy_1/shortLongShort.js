function shortLongShort(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return `One of the inputs wasn't a string`;
  }

  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else if (str2.length < str1.length) {
    return str2 + str1 + str2;
  }
  return 'Something sent wrong with the program';
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));        // "xyz"
