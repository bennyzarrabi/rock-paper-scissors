function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3);

    const options = ["rock", "paper", "scissors"];

    return options[computerSelection];
}

const choice = getComputerChoice();
console.log(choice);