// Variables
const rockPaperScissors = ['rock', 'paper', 'scissors'];
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundPlaying = document.querySelector('#roundPlay');
const result = document.querySelector('#result');
const computerChoice = document.querySelector('#computerChoose');
const imgComputer = document.querySelector('.start-computer');

let counterPlayer = 0;
let counterComputer = 0;
let count = 0;

// Computer choice by making a random number between 0 a 1. An accessing through bracket notation.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerSelection = rockPaperScissors[randomNumber - 1];
    return computerSelection;
}

// Add event listener => to every button and the selected weapon
function playRound(playerSelection, computerSelection) {
    if (counterPlayer === 5 || counterComputer === 5) {
        return;
    } else {
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
            result.textContent = 'Player WIN';
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
            result.textContent = 'Computer WIN';
            computerScore.textContent = counterComputer;
        }
    }

    // if (playerSelection === computerSelection) {
    //     // COMPUTER WIN

    //     count++;
    //     computerChoice.textContent = computerSelection;
    //     result.textContent = 'DRAW';
    //     imgComputer.src = `/images/${computerSelection}.svg`;
    //     roundPlaying.textContent = count;
    // } else if (
    //     (playerSelection === 'rock' && computerSelection === 'scissors') ||
    //     (playerSelection === 'paper' && computerSelection === 'rock') ||
    //     (playerSelection === 'scissors' && computerSelection === 'paper')
    // ) {
    //     computerChoice.textContent = computerSelection;
    //     counterPlayer++;
    //     result.textContent = 'Player win this round';
    //     playerScore.textContent = counterPlayer;
    //     imgComputer.src = `/images/${computerSelection}.svg`;
    //     count++;
    //     roundPlaying.textContent = count;
    // } else {
    //     computerChoice.textContent = computerSelection;
    //     counterComputer++;
    //     result.textContent = 'Computer win this round';
    //     computerScore.textContent = counterComputer;
    //     imgComputer.src = `/images/${computerSelection}.svg`;
    //     count++;
    //     roundPlaying.textContent = count;
    // }
    //}
}

// Initial function where it shows the order in which every function should be called
function playGame() {
    let playerSelection;
    const choosenByPlayer = document.querySelectorAll('button');

    choosenByPlayer.forEach((weapon) => {
        weapon.addEventListener('click', function () {
            if (playerScore === 5 || computerScore === 5) {
                whoIsTheWinner();
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
            }
            playRound(playerSelection, getComputerChoice());
        });
    });
}
playGame();
