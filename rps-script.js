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
    // only increment if choices different
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
        return `Human Score: ${humanScore}, Computer Score ${computerScore}`;

    }else{
        return `Human Score: ${humanScore}, Computer Score ${computerScore}`;
    }
}

// remove the logic that plays the game exactly five times
