////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
var move;
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    var move = return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move) {
  // Write an expression that operates on a variable called `move`
  //put computerMove as a global variable?
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  return move || getInput()/* Your Expression */;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    //put computerMove as a global variable?
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay()/* Your Expression */;
}

var winner;
function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === 'rock' && computerMove === 'scissors') {
      winner = 'player';
    }
    else if (playerMove === 'scissors' && computerMove === 'paper') {
      winner = 'player';
    }
    else if (playerMove === 'paper' && computerMove === 'rock') {
      winner = 'player';
    }
    else if (playerMove === computerMove) {
      winner = 'tie';
    }
    else {
      winner = 'computer';
    }
    return winner;
}

var playerWins = 0;
var computerWins = 0;
var round = 0;
var message = "";
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    while (playerWins < 5 && computerWins < 5) {
      var winner = getWinner(getPlayerMove(move),getComputerMove(move));
      if (winner === 'player') {
        playerWins += 1;
        round +=1;
        console.log(winner+ " wins round " + round);
      }
      else if (winner === 'computer') {
        computerWins += 1;
        round +=1;
        console.log(winner + " wins round" + round);
      }
      else if (winner === 'tie') {
        round += 1;
        console.log("round " + round + " is a tie. Try again.")
      }
      else {
        console.log("error in your code. Need to debug...")
      }

    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    return [playerWins, computerWins];
    console.log("Player won " + playerWins + " games and computer won "+ computerWins + " games");
    console.log("Game ended at round "+ round);
}
