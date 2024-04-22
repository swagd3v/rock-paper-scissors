const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function getComputerChoice() {
  let random = Math.trunc(Math.random() * 3);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  let result = "";
  if (playerSelection === computerSelection) {
    result = "ITS A TIE";
  } else {
    switch (playerSelection) {
      case "rock":
        result = computerSelection === "scissors" ? "You WIN" : "You LOSE";
        break;
      case "paper":
        result = computerSelection === "rock" ? "You WIN" : "You LOSE";
        break;
      case "scissors":
        result = computerSelection === "paper" ? "You WIN" : "You LOSE";
        break;
    }
  }

  const playerChoice = document.getElementById("player-choice");
  const computerChoice = document.getElementById("computer-choice");
  playerChoice.innerText = `PLAYER: ${playerSelection}`;
  computerChoice.innerText = `COMPUTER: ${computerSelection}`;

  const playerDisplay = document.getElementById("player-display");
  const computerDisplay = document.getElementById("computer-display");

  function reset() {
    playerScore = 0;
    computerScore = 0;
    playerDisplay.innerText = "Player:";
    computerDisplay.innerText = "Computer:";
  }

  if (result === "You WIN") {
    playerScore++;
    playerDisplay.innerText = `Player: ${playerScore}`;
    if (playerScore >= 5) {
      alert("YOU WIN");
      reset();
    }
  } else if (result === "You LOSE") {
    computerScore++;
    computerDisplay.innerText = `Computer: ${computerScore}`;
    if (computerScore >= 5) {
      alert("YOU LOSE");
      reset();
    }
  } else {
    return;
  }
}
