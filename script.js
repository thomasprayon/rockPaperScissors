// Variables
const rockPaperScissors = ['rock', 'paper', 'scissors'];
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundPlaying = document.querySelector('#roundPlay');
const result = document.querySelector('#result');
const computerChoice = document.querySelector('#computerChoose');
const imgComputer = document.querySelector('.start-computer');
const restartGameBtn = document.querySelector('#restartBtn');
const modalRestart = document.querySelector('.modal');

let counterPlayer = 0;
let counterComputer = 0;
let count = 0;
let winOrLose = '';

// Computer choice by making a random number between 0 a 1. An accessing through bracket notation.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerSelection = rockPaperScissors[randomNumber - 1];
    return computerSelection;
}

// Event Listener

restartGameBtn.addEventListener('click', function () {
    counterComputer = 0;
    counterPlayer = 0;
    count = 0;
    roundPlaying.textContent = count;
    playerScore.textContent = counterPlayer;
    computerScore.textContent = counterComputer;
    result.textContent = '';
    winOrLose = '';
    this.classList.add('hidden');
    modalRestart.classList.remove('active');
});

// Restart Game
function restartGame() {
    modalRestart.classList.add('active');
    restartGameBtn.classList.remove('hidden');
}
// Check who won !
function whoWonTheGame() {
    counterPlayer > counterComputer
        ? (winOrLose = 'You win!')
        : (winOrLose = 'You lose!');
    return winOrLose;
}

// Add event listener => to every button and the selected weapon
function playRound(playerSelection, computerSelection) {
    // DRAW
    if (playerSelection === computerSelection) {
        count++;
        result.textContent = 'DRAW';
        roundPlaying.textContent = count;
        imgComputer.src = `/images/${computerSelection}.svg`;
        computerChoice.textContent = computerSelection;
    }
    // PLAYER WIN
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        count++;
        counterPlayer++;
        imgComputer.src = `/images/${computerSelection}.svg`;
        roundPlaying.textContent = count;
        result.textContent = 'Player win the round';
        playerScore.textContent = counterPlayer;
    }
    // COMPUTER WIN
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        count++;
        counterComputer++;
        imgComputer.src = `/images/${computerSelection}.svg`;
        roundPlaying.textContent = count;
        result.textContent = 'Computer win the round';
        computerScore.textContent = counterComputer;
    }
}

// Initial function where it shows the order in which every function should be called
function playGame() {
    let playerSelection;
    const choosenByPlayer = document.querySelectorAll('button');
    choosenByPlayer.forEach((weapon) => {
        weapon.addEventListener('click', function () {
            console.log(
                `Player ${counterPlayer} vs. Computer ${counterComputer}`
            );
            if (counterPlayer === 5 || counterComputer === 5) {
                console.log(
                    `Player ${counterPlayer} vs. Computer ${counterComputer}`
                );
                restartGame();
                whoWonTheGame();
            } else {
                const whichWeapon = document.querySelectorAll('.player');
                if (weapon.classList.contains('rock')) {
                    whichWeapon[0].classList.add('choosen');
                    whichWeapon[1].classList.remove('choosen');
                    whichWeapon[2].classList.remove('choosen');
                    playerSelection = 'rock';
                } else if (weapon.classList.contains('paper')) {
                    whichWeapon[0].classList.remove('choosen');
                    whichWeapon[1].classList.add('choosen');
                    whichWeapon[2].classList.remove('choosen');
                    playerSelection = 'paper';
                } else {
                    whichWeapon[0].classList.remove('choosen');
                    whichWeapon[1].classList.remove('choosen');
                    whichWeapon[2].classList.add('choosen');
                    playerSelection = 'scissors';
                }
                playRound(playerSelection, getComputerChoice());
            }
        });
    });
}
playGame();
