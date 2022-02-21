
const buttons = document.querySelectorAll('.button');
const outputField = document.querySelector('.output-field');
let wins = 0;
let losses = 0;

buttons.forEach(button => button.addEventListener('click', playGame));


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

function playGame(){

    console.log(this.id);
    let playerMove = this.id;
    let compMove = computerPlay();
    let response = "";

    if (playerMove == compMove){
        response = `Score [ You(${wins}) : Comp(${losses}) ]\nYou tie... Both players chose ${compMove}. Rematch! `;
    }
    else if ((playerMove == "rock" && compMove == "scissors")
     || (playerMove == "scissors" && compMove == "paper")
     || (playerMove == "paper" && compMove == "rock")){
        wins++;
        response = `Score [ You(${wins}) : Comp(${losses}) ]\nYou win the round! ${playerMove} beats ${compMove}.`;  
     }
     else {
        losses++;
        response = `Score [ You(${wins}) : Comp(${losses}) ]\nYou lose the round! ${compMove} beats ${playerMove}.`;
     }

     outputField.innerText = response;

     if (wins === 5){
        outputField.innerText += `\n\nYou won the game! You won ${wins} rounds.`;
        wins = 0;
        losses = 0;
     }
     else if (losses === 5){
        outputField.innerText += `\n\nYou lost the game! You lost ${losses} rounds.`;
        wins = 0;
        losses = 0;
     }
}