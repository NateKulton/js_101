const readline = require('readline-sync');

console.log('What is your name?');
let userName = readline.question().trim();

if (userName.endsWith('!')) {
  console.log('HELLO ' + userName.toUpperCase().slice(0, -1) + '.' + ' WHY ARE WE SCREAMING?');
} else {
  console.log(`Hello ${userName}.`);
}
