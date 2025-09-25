let humanScore = 0, computerScore = 0; // init scores

function getComputerChoice(){

    // getRandom get random values between 0-3
    let getRandom = 3 * Math.random(); 
    if (getRandom < 1){
        // if between 0-1 return Rock
        return 'rock'
    }else if(getRandom >= 1 && getRandom < 2){
        // if between 1-2 return Paper
        return 'paper'
    }else{
        // and non-other options valid return scissors (2-3)
        return 'scissors'
    }
}


function getHumanChoice(){
    let userInput = prompt("Please enter one of the valid options, 'Rock', 'Paper', 'Scissors'");
    userInput = userInput.toLowerCase(); // lower-case for consistent input
    // check the user input if it's valid return input otherwise throw error
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    }else{
        throw new Error('Not a valid option, please enter valid input.');
    }
}

function playRound(humanChoice, computerChoice){
    
    if(computerScore < 5 && humanScore < 5){
        if(humanChoice !== computerChoice){
        // check for every case, increment scores
        switch(humanChoice){
            case 'rock':
                computerChoice === 'paper' ? computerScore += 1 : humanScore += 1;
                break;
            case 'paper':
                computerChoice === 'scissors' ? computerScore += 1 : humanScore += 1;
                break;
            case 'scissors':
                computerChoice === 'rock' ? computerScore += 1 : humanScore += 1;
                break;   
        }
        // add the logic to finish the game, when one of the players reach score 5
        if(humanScore === 5 && humanScore > computerScore){
            return `Game over you win! Human Score: ${humanScore}, Computer Score: ${computerScore}`;
        }else if (computerScore === 5 && humanScore < computerScore){
            return `Game over computer win! Human Score: ${humanScore}, Computer Score: ${computerScore}`;
        }else{
            return `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
        }
        
        }else{
            return `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
        }
    }else{
        return 'Refresh the page for a new game!'
    }
    
}

const actions = document.querySelector('#actions');
const showResult = document.querySelector('#result');

let result = '';

actions.addEventListener('click', (event) => {
    
    let target = event.target;

switch(target.id){
    case 'rock':
        result = playRound('rock', getComputerChoice());
        console.log(result);
        showResult.textContent = result;
        break;
    case 'paper':
        result = playRound('paper', getComputerChoice());
        console.log(result);
        showResult.textContent = result;
        break;
    case 'scissors':
        result = playRound('scissors', getComputerChoice());
        console.log(result);
        showResult.textContent = result;
        break;
}

})
