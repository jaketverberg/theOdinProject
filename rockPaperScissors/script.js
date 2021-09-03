//Set forth the peramiters of the game
let posibilities = ["rock", "paper", "scissors"];

//Variables keeping the score of the game
let playerWins = 0,
compWins = 0;

//This will be how the computer makes its random choice later
function computerPlay () {
return posibilities[Math.floor(Math.random() * 3)];
}


//This will be how each round is calculated and outputs given
function playRound (playerSelection, computerSelection) {
    
    //This will be the "Winning" IF section. ELSE is the "Loss section."
    if (playerSelection === computerSelection) {
        console.log(`It's a TIE! Try again!`);
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return playerWins++;
    } else {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
        return compWins++;
    }
}


//The main game function that pulls everything together
function game() {

        //We are going to play this game 5 times
        for (i = 0; i < 5; i++) {

        //This is where the computer makes its choice from above function
        const computerSelection = computerPlay();

        //This is where the player selects their choice
        let playerSelection = prompt("Rock, Paper, or Scissors?", "Choice").toLowerCase();
        
        //While the above playerSelection is not apart of the parameters, make anther selection
        while (posibilities.indexOf(playerSelection) == -1) {
            alert("That isn't an option! Please try again");
            playerSelection = prompt("Rock, Paper, or Scissors?", "Choice").toLowerCase();
        }

        //Start an actual round of the game
        playRound(playerSelection, computerSelection);

        //Output the score for this round
        console.log(`Score is Player: ${playerWins}, to Computer ${compWins}`);
    }

    //Output the final score of the game
    console.log(`Final Score: Player ${playerWins}, Computer ${compWins}`);
    
    //reset the player and computer wins if player wants to play again
    playerWins = 0;
    compWins = 0;

}