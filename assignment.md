
# rock paper scissors game

## notes

-- random computer

getComputerChoice

function that return

one of the following string values

rock, paper,  or scissors

hint -> math random 0-1

-- test function

write a logic that get human choice 

getHumanChoice, return one of the valid choice

-- store players score

humanScore
computerScore

init 0

-- write the logic to play a single round

playRound --> takes two parameters

humanChoice, computerChoice

make humanChoice parameter case-insensitive

increment the round winner


paper defeats rock
rock defeats scissors
scissors defeats paper


-- write the logic to play the entire game

play 5 rounds

playGame calls playRound to play 5 rounds, keep tracks of the scores and declares the winner.



