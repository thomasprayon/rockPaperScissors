console.log('attached script to attached to HTML file');

const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
const computerSelection = getComputerChoice();
let playerSelection;
let counterPlayer = 0;
let counterComputer = 0;

// Computer choice by making a random number between 0 a 1. An accessing through bracket notation.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return rockPaperScissors[randomNumber - 1];
}
function getPlayerChoice() {
    playerSelection = prompt('Paper, Rock or Scissors?');
    if (
        playerSelection == null ||
        playerSelection == undefined ||
        playerSelection == ''
    ) {
        alert('Please choose Paper, Rock or Scissors!!');
    } else {
        console.log(
            'Player correcting word:',
            playerSelection[0].toUpperCase() +
                playerSelection.slice(1).toLowerCase()
        );
        return (
            playerSelection[0].toUpperCase() +
            playerSelection.slice(1).toLowerCase()
        );
    }
}

// console.log('Computer choose:', getComputerChoice());
// console.log('Player choose:', getPlayerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return console.log(
            `DRAW: Computer choose ${computerSelection} and Player choose ${playerSelection}`
        );
    } else if (
        (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper')
    ) {
        counterComputer++;
        return console.log(`Computer WIN: ${counterComputer}`);
    } else {
        playerSelection++;
        return console.log(`Player WIN: ${counterPlayer}`);
    }
}

// playRound(getPlayerChoice(), computerSelection);
// console.log(`Computer: ${counterComputer} vs Player: ${counterPlayer}`);
