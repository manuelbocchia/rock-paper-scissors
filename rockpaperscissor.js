console.log("Let's play rock, paper, scissors!")

console.log("Best of 5, first to get 3 points wins!")

/* first, random generator of computer play */
function computerPlay() {
    let play = ["rock", "paper", "scissors"];
    let randomPlay = Math.floor(Math.random() * 3);
    return play[randomPlay];
}
 /* then the round player, where we see who wins */
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
            return "Tied"} 
            else if (computerSelection === "rock" && playerSelection === "paper") {
            return "You win! Paper beats Rock"}
            else if (computerSelection === "scissors" && playerSelection === "rock") {
            return "You win! Rock beats Scissors"}
            else if (computerSelection === "paper" && playerSelection === "scissors") {
            return "You win! Scissors beat Paper"}
            else if (computerSelection === "paper" && playerSelection === "rock"){
            return "You lose! Paper beats Rock"}
            else if (computerSelection === "scissors" && playerSelection === "paper") {
            return "You lose! Scissors beat Paper"}
            else if (computerSelection === "rock" && playerSelection === "scissors") {
            return "You lose! Rock beats Scissors"}
            else {
            return "Something went wrong, try again!"}
    }
     
function play() {
    let scoreComp = 0;
    let scorePlayer = 0;
    while (scoreComp < 3 && scorePlayer < 3) {
        let playerChoice = window.prompt("Choose Rock, Paper, Scissor").toLowerCase();
        let result = playRound(computerPlay(),playerChoice)
        switch (result) {
            case "Tied":
                break;
            case "You win! Paper beats Rock":
                scorePlayer += 1;
                break;
            case "You win! Rock beats Scissors":
                scorePlayer += 1;
                break;
            case "You win! Scissors beat Paper":
                scorePlayer += 1;
                break;
            case "You lose! Paper beats Rock":
                scoreComp += 1;
                break;
            case "You lose! Scissors beat Paper":
                scoreComp += 1;
                break;
            case "You lose! Rock beats Scissors":
                scoreComp += 1;
                break;
        }
    console.log(result+" "+"Score:"+"Player: "+scorePlayer+". Computer: "+scoreComp)
    }
    let winner = ""
    if (scoreComp === 3) {
        winner = "Computer"
    } else if (scorePlayer === 3) {
        winner = "Player"
    } else {
        winner = "None"
    }
    
    console.log("And the winner is: "+winner+" !!")
    console.log("Well played!")
}

play();