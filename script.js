function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissors";
}

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "It's a tie!";
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
}

function updateScore() {
    const scoreDiv = document.querySelector('#score');
    scoreDiv.textContent = `Your score : ${humanScore} - Computer Score : ${computerScore}`;
}

function checkWinner() {
    const winnerDiv = document.querySelector('#winner');
    if (humanScore >= 5) {
        winnerDiv.textContent = "You won the game!";
        gameOver = true;
        createRestartButton();
    } else if (computerScore >= 5) {
        winnerDiv.textContent = "Computer won the game!";
        gameOver = true;
        createRestartButton();
    }
}

function createRestartButton() {
    const button = document.createElement('button');
    button.textContent = "Restart Game";
    button.addEventListener('click', () => {
        restartGame();
        button.remove();
    });
    document.body.appendChild(button);
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScore();
    const resultDiv = document.querySelector('#result');
    resultDiv.textContent = '';
    const winnerDiv = document.querySelector('#winner');
    winnerDiv.textContent = '';
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (gameOver) return;
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        const res = playRound(humanChoice, computerChoice);
        const resultDiv = document.querySelector('#result');
        resultDiv.textContent = res;
        updateScore();
        checkWinner();
    });
});
