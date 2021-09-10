//Set forth the choices of the game
let posibilities = ["rock", "paper", "scissors"];

//Variables keeping the score of the game
let playerWins = 0,
compWins = 0;

//This will be how the computer makes its random choice later
function computerPlay () {
return posibilities[Math.floor(Math.random() * 3)];
}

