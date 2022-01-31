
const compMove = computerplay();
const playerMove = "rock";
// playerMove = playerMove.toLowerCase();
console.log(playerMove);
const res = playRound();

console.log(compMove);
console.log(res);

function computerplay(){
    genNum = Math.floor(Math.random() * 98);
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

function playRound(){
    let Result = "";
    if(playerMove == compMove){
        Result = "You Tie... Both players chose "  + compMove;
    }
    else if ((playerMove == "rock" && compMove == "scissors")
     || (playerMove == "scissors" && compMove == "paper")
     || (playerMove == "paper" && compMove == "rock")){
        Result = "You Win! " + playerMove + " beats " + compMove;
     }
     else {
        Result = "You Lose! " + compMove + " beats " + playerMove;
     }
     return Result;
}