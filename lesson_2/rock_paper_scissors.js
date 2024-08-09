const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let anotherRound;
let userWins = 0;
let computerWins = 0;
let grandChamp = 3;


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function userInput() {
  return readline.question().trim().toLowerCase();
}

function shortHand(userChoice) {
  if (userChoice === 'r') {
    userChoice = 'rock';
    return userChoice;
  } else if (userChoice === 'p') {
    userChoice = 'paper';
    return userChoice;
  } else if (userChoice === 'sc') {
    userChoice = 'scissors';
    return userChoice;
  } else if (userChoice === 'l') {
    userChoice = 'lizard';
    return userChoice;
  } else if (userChoice === 'sp') {
    userChoice = 'spock';
    return userChoice;
  } else {
    return userChoice;
  }
}

function userWinCondition(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}. Computer chose ${computerChoice}.`);

  return (userChoice === 'rock' && computerChoice === 'scissors') ||
         (userChoice === 'rock' && computerChoice === 'lizard') ||
         (userChoice === 'paper' && computerChoice === 'rock') ||
         (userChoice === 'paper' && computerChoice === 'spock') ||
         (userChoice === 'scissors' && computerChoice === 'paper') ||
         (userChoice === 'scissors' && computerChoice === 'lizard') ||
         (userChoice === 'lizard' && computerChoice === 'paper') ||
         (userChoice === 'lizard' && computerChoice === 'spock') ||
         (userChoice === 'spock' && computerChoice === 'scissors') ||
         (userChoice === 'spock' && computerChoice === 'rock');
}

function displayWinner(userChoice, computerChoice) {
  if (userWinCondition(userChoice, computerChoice)) {
    return "You won!";
  } else if (userChoice === computerChoice) {
    return "It looks like a tie!";
  } else {
    return "The computer won!";
  }
}

do {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt("Note: shorthand is 'r', 'p', 'sc', 'l', and 'sp' respectively");
  let userChoice = shortHand(userInput());

  while (!VALID_CHOICES.includes(userChoice)) {
    console.clear();
    prompt(`That's not a valid choice. Valid choices are: ${VALID_CHOICES.join(', ')}`);

    userChoice = shortHand(userInput());
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let stringWinner = displayWinner(userChoice, computerChoice);
  prompt(stringWinner);

  if (stringWinner === "You won!") {
    userWins += 1;
  } else if (stringWinner ===  "The computer won!") {
    computerWins += 1;
  }

  if (userWins === grandChamp) {
    prompt('YOU ARE THE GRAND CHAMPION!');
    break;
  } else if (computerWins === grandChamp) {
    prompt('THE COMPUTER IS THE GRAND CHAMPION!');
    break;
  }

  prompt("Enter 'y' to play again or 'n' to exit");
  anotherRound = userInput();

  while (anotherRound !== 'y' && anotherRound !== 'n') {
    prompt("You have to enter 'y' or 'n'!");
    anotherRound = userInput();
  }

  console.clear();
} while (anotherRound === 'y');
