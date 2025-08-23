function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    choice = prompt("Enter your choice: rock, paper, or scissors");
    choice = choice.trim().toLowerCase();
    return choice;
}

humanScore = 0;
computerScore = 0;

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

while (humanScore < 5 || computerScore < 5) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(result);
    if (humanScore === 5) {
        console.log("You win the game! You scored " + humanScore + " points and the computer scored " + computerScore + " points.");
        break;
    }
    else if (computerScore === 5) {
        console.log("You lose the game! You scored " + humanScore + " points and the computer scored " + computerScore + " points.");
        break;
    }
}
