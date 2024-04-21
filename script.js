const choices = ["rock", "paper", "scissors"];
let result;
let = playerSelection = prompt("rock, papper, or scissors?").toLowerCase();
let computerSelection = getComputerChoice();

function getComputerChoice() {
  let random = Math.trunc(Math.random() * 3);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
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

  return result;
}

function playGame() {
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
}

playGame();
