const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
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
      (userChoice === 'rock' && computerChoice === 'lizard') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'paper' && computerChoice === 'spock') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'scissors' && computerChoice === 'lizard') ||
      (userChoice === 'lizard' && computerChoice === 'paper') ||
      (userChoice === 'lizard' && computerChoice === 'spock') ||
      (userChoice === 'spock' && computerChoice === 'scissors') ||
      (userChoice === 'spock' && computerChoice === 'rock')) {
    prompt("You Won using!");
  } else if ((userChoice === 'rock' && userChoice === 'scissors') ||
      (computerChoice === 'rock' && userChoice === 'lizard') ||
      (computerChoice === 'paper' && userChoice === 'rock') ||
      (computerChoice === 'paper' && userChoice === 'spock') ||
      (computerChoice === 'scissors' && userChoice === 'paper') ||
      (computerChoice === 'scissors' && userChoice === 'lizard') ||
      (computerChoice === 'lizard' && userChoice === 'paper') ||
      (computerChoice === 'lizard' && userChoice === 'spock') ||
      (computerChoice === 'spock' && userChoice === 'scissors') ||
      (computerChoice === 'spock' && userChoice === 'rock')) {
    prompt("The computer wins!");
  } else {
    prompt("It looks like a tie!");
  }
}

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = reformattedUserInput();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(`That's not a valid choice. Valid choices are: ${VALID_CHOICES.join(', ')}`);

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
