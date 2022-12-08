// Variables
let counterPlayer = 0;
let counterComputer = 0;
let count = 0;
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

// Computer choice by making a random number between 0 a 1. An accessing through bracket notation.
function getComputerChoice() {
    const rockPaperScissors = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerSelection = rockPaperScissors[randomNumber - 1];
    return computerSelection;
}

function countRound() {
    let roundPlaying = document.querySelector('#roundPlay');
    count++;
    roundPlaying.textContent = count;
}

// Add event listener => to every button and the selected weapon
function playRound(playerSelection, computerSelection) {
    let computerChoice = document.querySelector('#computerChoose');
    let imgComputer = document.querySelector('.start-computer');
    const result = document.querySelector('#result');
    const playingUntilFive = 5;
    if (playingUntilFive === counterPlayer) {
        result.textContent = 'Player WIN';
    } else if (playingUntilFive === counterComputer) {
        result.textContent = 'Computer WIN';
    } else {
        if (playerSelection === computerSelection) {
            computerChoice.textContent = computerSelection;
            result.textContent = 'DRAW';
            imgComputer.src = `/images/${computerSelection}.svg`;
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            computerChoice.textContent = computerSelection;
            counterPlayer++;
            result.textContent = 'Player win this round';
            playerScore.textContent = counterPlayer;
            imgComputer.src = `/images/${computerSelection}.svg`;
        } else {
            computerChoice.textContent = computerSelection;
            counterComputer++;
            result.textContent = 'Computer win this round';
            computerScore.textContent = counterComputer;
            imgComputer.src = `/images/${computerSelection}.svg`;
        }
    }
}

// Initial function where it shows the order in which every function should be called
function playGame() {
    let playerSelection;
    const choosenByPlayer = document.querySelectorAll('button');
    choosenByPlayer.forEach((weapon) => {
        weapon.addEventListener('click', function () {
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
            countRound();
        });
    });
}
playGame();
