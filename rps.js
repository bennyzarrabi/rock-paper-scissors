
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function playRound(userChoice) {
    const computer = computerChoice();
  
    if (!["rock", "paper", "scissors"].includes(userChoice)) {
      return "Invalid choice";
    }
  
    if (userChoice === computer) {
      return "Tie";
    } else if (
      (userChoice === "rock" && computer === "scissors") ||
      (userChoice === "paper" && computer === "rock") ||
      (userChoice === "scissors" && computer === "paper")
    ) {
      return "You win";
    } else {
      return "Computer wins";
    }
  }
  
  function game() {
    let userScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const userChoice = prompt(`Round ${round}: Choose rock, paper, or scissors:`).toLowerCase();
      const result = playRound(userChoice);
  
      if (result === "Invalid choice") {
        alert("Invalid choice. This round does not count.");
      } else if (result === "Tie") {
        alert(`Round ${round}: It's a tie!`);
      } else if (result === "You win") {
        userScore++;
        alert(`Round ${round}: You win this round!`);
      } else {
        computerScore++;
        alert(`Round ${round}: Computer wins this round!`);
      }
    }
  
    if (userScore > computerScore) {
      alert(`You win the game! (Your Score: ${userScore} | Computer Score: ${computerScore})`);
    } else if (computerScore > userScore) {
      alert(`Computer wins the game! (Your Score: ${userScore} | Computer Score: ${computerScore})`);
    } else {
      alert(`It's a tie! (Your Score: ${userScore} | Computer Score: ${computerScore})`);
    }
  }
  
  // Run the game
  game();