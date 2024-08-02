const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let anotherRound;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function reformattedUserInput() {
  return readline.question().trim().toLowerCase();
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}. Computer chose ${computerChoice}.`);

  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt("You win!");
  } else if ((computerChoice === 'rock' && userChoice === 'scissors') ||
            (computerChoice === 'paper' && userChoice === 'rock') ||
            (computerChoice === 'scissors' && userChoice === 'paper')) {
    prompt("The computer wins!");
  } else {
    prompt("It looks like a tie!");
  }
}

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = reformattedUserInput();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice. Your choices are: rock, paper, or scissors");

    userChoice = reformattedUserInput();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(userChoice, computerChoice);

  prompt("Enter 'y' to play again or 'n' to exit");
  anotherRound = reformattedUserInput();

  while (anotherRound !== 'y' && anotherRound !== 'n') {
    prompt("You have to enter 'y' or 'n'!");
    anotherRound = reformattedUserInput();
  }

  console.clear();
} while (anotherRound === 'y');
