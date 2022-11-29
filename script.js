console.log('attached script to attached to HTML file');

const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
const counterPlayer = 0;
const counterComputer = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    // console.log(rockPaperScissors[randomNumber - 1]);
    return rockPaperScissors[randomNumber - 1];
}

getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock')
    ) {
        console.log(`Paper win against Rock`);
        console.log(
            `Player choose: ${playerSelection} vs. Computer choose: ${computerSelection}`
        );
    } else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (computerSelection == 'Rock' && computerSelection == 'Scissors')
    ) {
        console.log('Rock win against Scissors');
        console.log(
            `Player choose: ${playerSelection} vs. Computer choose: ${computerSelection}`
        );
    } else if (
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors')
    ) {
        console.log('Scissors win against Paper');
        console.log(
            `Player choose: ${playerSelection} vs. Computer choose: ${computerSelection}`
        );
    } else {
        console.log(
            `DRAW: Player choose: ${playerSelection} vs. Computer choose: ${computerSelection}`
        );
    }
}
const playerSelection = prompt('Paper, Rock or Scissors?');
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
