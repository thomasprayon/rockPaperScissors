// Variables
// const rockPaperScissors = ['rock', 'paper', 'scissors'];
// const playerScore = document.querySelector('#playerScore');
// const computerScore = document.querySelector('#computerScore');
// const result = document.querySelector('#result');
// const imgComputer = document.querySelector('.start-computer');
// const restartGameBtn = document.querySelector('#restartBtn');
// const modalRestart = document.querySelector('.modal');
// const resultMessage = document.querySelector('#finalMessage');
// // Choosen weapon
// const chooseByPlayer = document.querySelector('.player-selected');
// const computerChoice = document.querySelector('#computerChoose');

// console.log(chooseByPlayer.src);
// let counterPlayer = 0;
// let counterComputer = 0;
// let winOrLose = '';

// // Computer choice by making a random number between 0 a 1. An accessing through bracket notation.
// function getComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3 + 1);
//     const computerSelection = rockPaperScissors[randomNumber - 1];
//     return computerSelection;
// }

// // Event Listener

// restartGameBtn.addEventListener('click', function () {
//     counterComputer = 0;
//     counterPlayer = 0;
//     playerScore.textContent = counterPlayer;
//     computerScore.textContent = counterComputer;
//     result.textContent = '';
//     winOrLose = '';
//     this.classList.add('hidden');
//     modalRestart.classList.remove('active');
// });

// // Restart Game
// function restartGame() {
//     modalRestart.classList.add('active');
//     restartGameBtn.classList.remove('hidden');
// }
// // Check who won !
// function whoWonTheGame() {
//     counterPlayer > counterComputer
//         ? (winOrLose = 'You win!')
//         : (winOrLose = 'You lose!');
//     resultMessage.textContent = `${winOrLose}`;
// }

// // Add event listener => to every button and the selected weapon
// function playRound(playerSelection, computerSelection) {
//     // DRAW
//     if (playerSelection === computerSelection) {
//         result.textContent = 'DRAW';
//         imgComputer.src = `/images/${computerSelection}.svg`;
//         computerChoice.textContent = computerSelection;
//     }
//     // PLAYER WIN
//     if (
//         (playerSelection === 'rock' && computerSelection === 'scissors') ||
//         (playerSelection === 'paper' && computerSelection === 'rock') ||
//         (playerSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//         counterPlayer++;
//         imgComputer.src = `/images/${computerSelection}.svg`;
//         result.textContent = 'Player win the round';
//         playerScore.textContent = counterPlayer;
//     }
//     // COMPUTER WIN
//     if (
//         (computerSelection === 'rock' && playerSelection === 'scissors') ||
//         (computerSelection === 'paper' && playerSelection === 'rock') ||
//         (computerSelection === 'scissors' && playerSelection === 'paper')
//     ) {
//         counterComputer++;
//         imgComputer.src = `/images/${computerSelection}.svg`;
//         result.textContent = 'Computer win the round';
//         computerScore.textContent = counterComputer;
//     }
// }

// // Initial function where it shows the order in which every function should be called
// function playGame() {
//     let playerSelection;
//     const choosenByPlayer = document.querySelectorAll('button');
//     choosenByPlayer.forEach((weapon) => {
//         weapon.addEventListener('click', function () {
//             if (counterPlayer === 5 || counterComputer === 5) {
//                 restartGame();
//                 whoWonTheGame();
//             } else {
//                 const whichWeapon = document.querySelectorAll('.player');
//                 if (weapon.classList.contains('rock')) {
//                     whichWeapon[0].classList.add('choosen');
//                     whichWeapon[1].classList.remove('choosen');
//                     whichWeapon[2].classList.remove('choosen');
//                     playerSelection = 'rock';
//                 } else if (weapon.classList.contains('paper')) {
//                     whichWeapon[0].classList.remove('choosen');
//                     whichWeapon[1].classList.add('choosen');
//                     whichWeapon[2].classList.remove('choosen');
//                     playerSelection = 'paper';
//                 } else {
//                     whichWeapon[0].classList.remove('choosen');
//                     whichWeapon[1].classList.remove('choosen');
//                     whichWeapon[2].classList.add('choosen');
//                     playerSelection = 'scissors';
//                 }
//                 playRound(playerSelection, getComputerChoice());
//             }
//         });
//     });
// }
// playGame();

// ROCK PAPER SCISSORS
// Variables
const computerSelected = document.querySelector('#computerChoose');
const playerSelected = document.querySelector('#playerChoose');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const buttons = document.querySelectorAll('button');
let initialPlayerScore = 0;
let initialComputerScore = 0;
let playerSelection;

// Computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let pickedChoice = '';
    console.log(randomNumber);
    switch (randomNumber) {
        case 1:
            pickedChoice = 'rock';
            break;
        case 2:
            pickedChoice = 'paper';
            break;
        case 3:
            pickedChoice = 'scissors';
            break;
    }
    computerSelected.src = `/images/${pickedChoice}.svg`;
}

//Play round
function playRound(playerSelection, computerSelection) {
    //Draw
    if (playerSelection === computerSelection) {
        console.log('Draw');
    }
    // Player Selection
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log('Player Win');
    }
    // Computer Selection
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        console.log('Computer Win');
    }
}

//Player choice
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.className === 'player rock') {
            playerSelection = 'rock';
            playerSelected.src = `/images/rock.svg`;
        }
        if (e.target.className === 'player paper') {
            playerSelection = 'paper';
            playerSelected.src = `/images/paper.svg`;
        }
        if (e.target.className === 'player scissors') {
            playerSelection = 'scissors';
            playerSelected.src = `/images/scissors.svg`;
        }
        playRound(playerSelection, getComputerChoice());
    });
});
