let computerSelection;
let userSelection;

function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 1){
        computerSelection = "ROCK";
    } else if (randomNum == 2) {
        computerSelection = "PAPER";
    }else {
        computerSelection = "SCISSORS";
    }
}


function getuserSelection() {
    let selection = prompt("Let's play Rock, Paper, Scissors! \
                           \nAdd your selection below:", "");

    userSelection = selection.toUpperCase();

    if (userSelection === "ROCK" || userSelection === "PAPER" || userSelection === "SCISSORS"){
        return userSelection;
       }else {
        userSelection = false;
        alert("Error! \
        \nYour answer must be either Rock, Paper, or Scissors.\
        \nTry Again!");
       }
}

let winner;

function play(){
    if (userSelection === "ROCK") {
        if (computerSelection === "PAPER"){
            winner = "computer";
            alert("You loose! Paper beats rock!")
        }else if(computerSelection === "SCISSORS"){
            winner = "user";
            alert("You win! Rock beats Scissors")
        }else if (computerSelection === "ROCK"){
            winner = null;
            alert("It's a tie");
        }
    }else if (userSelection === "PAPER"){
        if (computerSelection === "ROCK"){
            winner = "user";
            alert("You win! Paper beats Rock!");
        }else if(computerSelection === "SCISSORS"){
            winner = "computer";
            alert("You loose! Scissors beat Paper!")
        }else if (computerSelection === "PAPER"){
            winner = null;
            alert("It's a tie");
        }
    }else if (userSelection === "SCISSORS") {
        if (computerSelection === "ROCK"){
            winner = "computer";
            alert("You loose! Rock beats Scissors!");
        }else if(computerSelection === "PAPER"){
            winner = "user";
            alert("You win! Scissors beat paper!")
        }else if (computerSelection === "SCISSORS"){
            winner = null
            alert("It's a tie");
        }
    }
}


let userWins = 0;
let computerWins = 0;

function game(){
    let games = 0;

    while (games < 5){
        computerPlay();
        getuserSelection();
        play();
        if (userSelection) {games++;}

        if (winner === "user"){
            userWins++;
        }else if(winner === "computer"){
            computerWins++;
        }
    }
    
    if (userWins > computerWins){
        alert("GAME OVER! Your wins: " + userWins + " | Computer wins: " + computerWins + "\nYOU WIN!");
    }else if(userWins < computerWins){
        alert("GAME OVER! Your wins: " + userWins + " | Computer wins: " + computerWins + "\nYOU LOOSE!");
    }else{
        alert("GAME OVER! Your wins: " + userWins + " | Computer wins: " + computerWins + "\nIT'S A TIE");
    }
    
}

game();