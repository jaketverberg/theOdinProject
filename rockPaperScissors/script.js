//Set forth the choices of the game
let posibilities = ["rock", "paper", "scissors"];

//Variables keeping the score of the game
let playerWins = 0,
compWins = 0;

//This will be how the computer makes its random choice later
function computerPlay () {
return posibilities[Math.floor(Math.random() * 3)];
}


let posibilities = ["rock", "paper", "scissors"];

const scoreContainer = document.querySelector('Scores')
const userScore = document.createElement('p');
const computerScore = document.createElement('p');


//Variables keeping the score of the game
let playerWins = 0,
compWins = 0,
playerGuess = '';


//Display initial score of 0
userScore.textContent = `${compWins}`;
computerScore.textContent = `${playerWins}`;
scoreContainer.appendChild(userScore);
scoreContainer.appendChild(computerScore);


//This will be how the computer makes its random choice later
function computerPlay () {
return posibilities[Math.floor(Math.random() * 3)];
}


//Game function
function playRound () {
  let compGuess = computerPlay();
  
  if (playerGuess === compGuess) {
    alert("It's a Tie! Try again");
  }

  if (compGuess == "rock" && playerGuess == "scissors"
      || compGuess == "scissors" && playerGuess == "paper"
      || compGuess == "paper" && playerGuess == "rock") {

        compWins++;
        computerScore.textContent = `${compWins}`;
      } else if (playerGuess == "rock" && compGuess == "scissors"
      || playerGuess == "scissors" && compGuess == "paper"
      || playerGuess == "paper" && compGuess == "rock") {

        playerWins++;
        userScore.textContent = `${playerWins}`;
      }
  
scoreContainer.appendChild(userScore);
scoreContainer.appendChild(computerScore);

  //End of game return
  if (compWins == 5) {
    alert("Computer Won! Better luck next time");
  } else if (playerWins == 5) {
    alert("You WON! Great work soldier");
  }

}

const buttons = document.querySelectorAll('img');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerGuess = `${button.id}`;
    playRound();
  });
});