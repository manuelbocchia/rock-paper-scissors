



const roundResult = document.querySelector("#result");
const userPlay = document.querySelector("#user");
const PCPlay = document.querySelector("#PC");
const showScore = document.querySelector("#score");

roundResult.innerText = "What's your move?"


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

let score = {
    user:0,
    PC:0
}

showScore.innerText = `"You ${score.user} VS It ${score.user}"`

const handPlay = document.createElement("img");
handPlay.id = "userPlay"

const PChand = document.createElement("img");
PChand.id = "PCPlay"

userPlay.appendChild(handPlay);
PCPlay.appendChild(PChand);


const imageSrc = {
    rock : "Rock.png",
    paper : "Paper.png",
    scissors : "Scissor.png"
}

/* now for the actual game, we analyze the play and keep score, as long as noone has 3 points, the game keeps playing */
function play() {
        let playerChoice = playerChoiceArr[0];
        let PCChoice = computerPlay();
        let result = playRound(PCChoice,playerChoice)
        switch (result) {
            case "Tied":
                break;
            case "You win! Paper beats Rock":
                score.user ++;
                break;
            case "You win! Rock beats Scissors":
                score.user ++;
                break;
            case "You win! Scissors beat Paper":
                score.user ++;
                break;
            case "You lose! Paper beats Rock":
                score.PC ++;
                break;
            case "You lose! Scissors beat Paper":
                score.PC ++;
                break;
            case "You lose! Rock beats Scissors":
                score.PC ++;
                break;
        }
    
    showScore.innerText = `You ${score.user} VS It ${score.PC}`;
    
    handPlay.src = imageSrc[`${playerChoice}`]

    PChand.src = imageSrc[`${PCChoice}`]

    roundResult.innerText = `${result}`

    console.log(imageSrc[`${playerChoice}`])
    console.log(imageSrc[`${PCChoice}`])

    }


    
    // Create the system for getting the player's choice

    playerChoiceArr = ["rock"];

    const weapons = document.querySelectorAll(".handImg")
    
    weapons.forEach( elem=> {
        elem.addEventListener('pointerdown', (e) => {
            playerChoiceArr.pop();
            playerChoiceArr.push(`${elem.id}`);
            console.log(playerChoiceArr);
            play()
        })
    })
    

// Some simple class manipulation to give it the animation of popping



const images = document.querySelectorAll(".handImg") 


images.forEach( elem => {
    elem.addEventListener('pointerdown', function (e) {
    elem.classList.add("touched");
  });
    elem.addEventListener('pointerup', function (e) {
    elem.classList.remove("touched");
  })
    })


