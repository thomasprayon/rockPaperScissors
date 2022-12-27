// Variables
const computerSelected = document.querySelector('#computerChoose');
const playerSelected = document.querySelector('#playerChoose');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const result = document.querySelector('#resultMsg');
const buttons = document.querySelectorAll('button');
const modal = document.querySelector('.modal');
const restartBtn = document.querySelector('#restartBtn');
const finalMessage = document.querySelector('#finalMessage');
let initialPlayerScore = 0;
let initialComputerScore = 0;
let whoWin = '';

// Restart game
function restartGame() {
    initialComputerScore = 0;
    initialPlayerScore = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerSelected.src = `/images/question.svg`;
    computerSelected.src = `/images/question.svg`;
    result.textContent = 'None';
}

// Winner or Loser
function whoWinTheGame() {
    initialPlayerScore > initialComputerScore
        ? (whoWin = 'You win!')
        : (whoWin = 'You lose!');
    finalMessage.textContent = whoWin;
}

// Computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let pickedChoice = '';
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
    return pickedChoice;
}

// Check winner
function checkWinner() {
    if (initialComputerScore === 5 || initialPlayerScore === 5) {
        console.log(`InitialScore Computer: ${initialComputerScore}`);
        console.log(`InitialScore Player: ${initialPlayerScore}`);
        initialPlayerScore > initialComputerScore
            ? (finalMessage.textContent = 'You win!')
            : (finalMessage.textContent = 'You lose!');
        modal.classList.add('active');
    }
}

//Play round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Draw');
        result.textContent = 'Draw';
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log('Player Win');
        result.textContent = 'Player win';
        initialPlayerScore++;
        playerScore.textContent = initialPlayerScore;
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        console.log('Computer Win');
        initialComputerScore++;
        result.textContent = 'Computer win';
        computerScore.textContent = initialComputerScore;
    }
    checkWinner();
}

//Play game
function playGame() {
    let playerSelection;
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            if (initialComputerScore >= 5 || initialPlayerScore >= 5) {
                checkWinner();
                restartGame();
                restartBtn.addEventListener('click', function (e) {
                    console.log('Event listener happening', e.target);
                    modal.classList.remove('active');
                });
            } else {
                if (button.classList.contains('rock')) {
                    playerSelection = 'rock';
                    playerSelected.src = `/images/rock.svg`;
                } else if (button.classList.contains('paper')) {
                    playerSelection = 'paper';
                    playerSelected.src = `/images/paper.svg`;
                } else {
                    playerSelection = 'scissors';
                    playerSelected.src = `/images/scissors.svg`;
                }
                playRound(playerSelection, getComputerChoice());
            }
        });
    });
}

playGame();
