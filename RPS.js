
const buttons = document.querySelectorAll('.button');
const outputField = document.querySelector('.output-field');

// buttons.forEach(button => button.addEventListener('click', roundOrGame, {
//     once: true
// }));

buttons.forEach(button => button.addEventListener('click', playRound));

function roundOrGame(){
    const Response = confirm(
        "Press \"OK\", if you would like to play a five round game of RPS.\
\nPress \"Cancel\", if you would only like to play a round.");
    if (Response) {
        playGame();
    }
    else{
        playRound();
    }
}

function computerPlay(){
    let genNum = Math.floor(Math.random() * 98);
    let compMove = "";
    if (genNum <= 32){
        compMove = "rock";
    }
    else if (genNum <= 65){
        compMove = "scissors";
    }
    else {
        compMove = "paper";
    }
    return compMove;
}

// function getID(){
//     console.log(this.id);
// }

// function getInput(){
//     outputField.innerText = "Please select an option above";
//     buttons.forEach(button => button.addEventListener('click', getID));
// }

function playRound(){

    // let playerMove = (window.prompt("rock, paper or scissors?", "rock")).toLowerCase();
    console.log(this.id);
    let playerMove = this.id;
    let compMove = computerPlay();
    let response = "";
    let win = 0;

    if ((playerMove != "rock")
    && (playerMove != "scissors")
    && (playerMove != "paper")){
        response = `You lost! You cannot use ${playerMove}`;
    }
    else if (playerMove == compMove){
        response = `You tie... Both players chose ${compMove}. Rematch!`;
        win = -1;
    }
    else if ((playerMove == "rock" && compMove == "scissors")
     || (playerMove == "scissors" && compMove == "paper")
     || (playerMove == "paper" && compMove == "rock")){
        response = `You win the round! ${playerMove} beats ${compMove}.`;
        win = 1;
     }
     else {
        response = `You lose the round! ${compMove} beats ${playerMove}.`;
     }
     outputField.innerText = response;
     return win;
}

function playGame(){
    let wins = 0;
    let losses = 0;
    let res = 0;
    let initGameCount = 5;
    let gameCount = initGameCount;
    let response = "";
    
    while(true){
        res = playRound();
        if (res == -1){
            gameCount +=1;
        }
        else if(res == 1){ 
            if(++wins > Math.floor(initGameCount / 2)){
                response = `You won the game! You won ${wins} of ${initGameCount} rounds.`;
                break;
            }
        }
        else{
            if(++losses > Math.floor(initGameCount / 2)){
                response = `You lost the game! You lost ${losses} of ${initGameCount} rounds.`;
                break;
            }
        }
    }
    console.log(response);
}