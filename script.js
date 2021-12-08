//create variables that are gonna store the selections
let computerSelection;
let userSelection;
//create options for user to choose his selection,
//get the selection from user, make it case insensitive
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    userSelection = "ROCK";
    playRound();
});
paper.addEventListener("click", () => {
    userSelection = "PAPER";
    playRound();
});
scissors.addEventListener("click", () => {
    userSelection = "SCISSORS";
    playRound();
});
//create function that makes random selection for computer
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

//create variables that are gonna keep score for each
//player
let userScore = 0;
let compScore = 0;

//create variables that will select the html elements
//where the results will be shown
let resultPara = document.querySelector("#resultPara");
let scorePara = document.querySelector("#scorePara");

//create a function that plays one round, increment the
//score for each winner, display the winner by text
resultPara.textContent = "Click a symbol to play";
scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;

function playRound() {
    computerPlay();
    if (userSelection === "ROCK") {
        if (computerSelection === "PAPER"){
            compScore++;
            resultPara.textContent = "You loose! Paper beats rock!";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }else if(computerSelection === "SCISSORS"){
            userScore++;
            resultPara.textContent = "You win! Rock beats Scissors";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }else if (computerSelection === "ROCK"){
            
            resultPara.textContent = "It's a tie";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }
    }else if (userSelection === "PAPER"){
        if (computerSelection === "ROCK"){
            userScore++;
            resultPara.textContent = "You win! Paper beats Rock!";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }else if(computerSelection === "SCISSORS"){
            compScore++;
            resultPara.textContent = "You loose! Scissors beat Paper!";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }else if (computerSelection === "PAPER"){
            
            resultPara.textContent = "It's a tie";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }
    }else if (userSelection === "SCISSORS") {
        if (computerSelection === "ROCK"){
            compScore++;
            resultPara.textContent = "You loose! Rock beats Scissors!";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }else if(computerSelection === "PAPER"){
            userScore++;
            resultPara.textContent = "You win! Scissors beat paper!";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }else if (computerSelection === "SCISSORS"){
            
            resultPara.textContent = "It's a tie";
            scorePara.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        }
    }
    checkScore();
}


//create a function that is gonna keep playing while
//score is less than 5 and return the results and 
//winner of the game
const content = document.querySelector(".content");
function checkScore() {
    if (userScore === 5 || compScore === 5){
        const score = document.createElement("h3");
        const winner = document.createElement("h1");
        const a = document.createElement("a"); //to reload the game
        const link = document.createTextNode("Play Again")
        
        content.textContent = "";
        if (userScore === 5) {
            winner.textContent = `Game Over! YOU WIN`;
            winner.style.cssText = "background-color: rgba(58, 245, 21, 0.596);\
            padding: 50px;\
            border-radius: 10px;";
        }else{
                winner.textContent = `Game Over! YOU LOOSE`;
                winner.style.cssText = "background-color: rgba(243, 8, 8, 0.596);\
                padding: 50px;\
                border-radius: 10px;";
            }

        score.textContent = `Your score: ${userScore} | Computer Score: ${compScore}`;
        
        a.appendChild(link);
        a.href = "index.html";
        a.title = "Play Again";
        

        content.appendChild(winner);
        content.appendChild(score);
        content.appendChild(a);
    }
}
