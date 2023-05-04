
function getComputerChoice(){
    let result = Math.floor(Math.random() * 3);
    if (result === 0){
        return "rock";
    } else if(result === 1){
        return "paper";
    } else {
        return "scissors";
    }

}

function getPlayerChoice(){
    return prompt("choose rock, paper or scissors!").toLowerCase();
}










function game(){
    
    function playRound(playerSelection, computerSelection){
        if (playerSelection === computerSelection){
            return `It's a Tie! ${playerSelection} = ${computerSelection}`;
        } else if(playerSelection === "rock" && computerSelection === "scissors"){
            return "You Win! Rock beats Scissors!";
        } else if(playerSelection === "paper" && computerSelection === "rock"){
            return "You Win! Paper beats Rock!";
        } else if(playerSelection === "scissors" && computerSelection === "paper"){
            return "You Win! Scissors beats Paper";
        } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`
        }
    }

    
        let playerRoundsWon = 0;
        let computerRoundsWon = 0;
    for(rounds = 1; rounds < 6; rounds++){
        let playerSelection= getPlayerChoice();
        let computerSelection = getComputerChoice();
        
        
        let result = playRound(playerSelection,computerSelection);
        if(result === "You Win! Rock beats Scissors!" || result === "You Win! Paper beats Rock!" || result === "You Win! Scissors beats Paper" ){
            playerRoundsWon++;
            console.log(`You won round ${rounds} The score is now ${playerRoundsWon}-${computerRoundsWon}`);
        } else if(result === `You Lose! ${computerSelection} beats ${playerSelection}!` ){
            computerRoundsWon++; 
            console.log(`You lost round ${rounds} The score is now ${playerRoundsWon}-${computerRoundsWon}`);
        } else {
            console.log(`Round ${rounds} was a Tie! The score is now ${playerRoundsWon}-${computerRoundsWon}`);
        }

    }
    console.log(`The final score was ${playerRoundsWon}-${computerRoundsWon}`)
    if(playerRoundsWon > computerRoundsWon){
        return "Congradulations! You Won!";
    } else if(computerRoundsWon > playerRoundsWon){
        return "You Lose! Better Luck Next Time!";
    } else {
        return "It's a Tie!"
    }
    
}

console.log(game());