let playerScore = 0;
let computerScore = 0;
// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');
// const scissors = document.getElementById('scissors');
const resultUI = document.getElementById('result');
const playerScoreUI = document.getElementById('playerScore');
const computerScoreUI = document.getElementById('computerScore');


function getComputerChoice() {
  const computerChoice = new Map([[0, 'Rock'],
                                  [1, 'Paper'],
                                  [2, 'Scissors']]);
  return computerChoice.get(Math.floor(Math.random() * 3));
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == 'rock') {
      if (computerSelection.toLowerCase() == 'paper') {
        computerScore += 1;
        return "You Lose! Paper beats Rock";
      }
      else if (computerSelection.toLowerCase() == 'scissors') {
        playerScore += 1;
        return "You Win! Rock beats Scissors";
      }
      else {
        return "Tie";
      }
  }
  else if (playerSelection.toLowerCase() == 'paper') {
      if (computerSelection.toLowerCase() == 'scissors') {
        computerScore += 1;
        return "You Lose! Scissors beats Paper";
      }
      else if (computerSelection.toLowerCase() == 'rock') {
        playerScore += 1;
        return "You Win! Paper beats Rock";
      }
      else {
        return "Tie";
      }
  }
  else {
      if (computerSelection.toLowerCase() == 'rock') {
        computerScore += 1;
        return "You Lose! Rock beats Scissors";
      }
      else if (computerSelection.toLowerCase() == 'paper') {
        playerScore += 1;
        return "You Win! Scissors beats Paper";
      }
      else {
        return "Tie";
      }
  }
}


function updateScoreBoard() {
  playerScoreUI.textContent = `Player: ${playerScore}`;
  computerScoreUI.textContent = `Computer: ${computerScore}`;
}


function gameOver() {
  if (playerScore == 5) {
    result.textContent = 'Game Over, You Win!';
    playerScore = 0;
    computerScore = 0;
  }
  else if (computerScore == 5) {
    result.textContent = 'Game Over, Computer Wins';
    playerScore = 0;
    computerScore = 0;
  }
}


rock.addEventListener("click", function(e)
{
  resultUI.textContent = playRound("rock", getComputerChoice());
  updateScoreBoard();
  gameOver();
});


paper.addEventListener("click", function(e)
{
  resultUI.textContent = playRound("paper", getComputerChoice());
  updateScoreBoard();
  gameOver();
});      


scissors.addEventListener("click", function(e)
{
  resultUI.textContent = playRound("scissors", getComputerChoice());
  updateScoreBoard();
  gameOver();
});

