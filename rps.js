const computerSelection = Math.floor(Math.random() * 3);

const userInput = prompt("Choose rock, paper, or scissors: ");

const normalizedInput = userInput.toLowerCase();

const userInput = playerSelection;

function getComputerChoice() {
    
    const options = ["rock", "paper", "scissors"];

    return options[computerSelection];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, scissors beats paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win, scissors beats paper!";
    } else {
        return "You ties, try again!";
    }
}

const choice = getComputerChoice();
console.log(choice);