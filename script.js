//Welcome to Rock Paper Scissors Console Version TOP 2021

console.log("Let's play Rock Paper Scissors in the console against the computer\n\nThe first to get 5 points wins!!!\n\nTo begin type game() in the console and then type either rock, paper or scissors when prompted")

let answers = ['rock', 'paper', 'scissors']

let playerSelection = ""

let userScore = 0 

let computerScore = 0  

//Create a Function to get a Computer choice randomly from previous array
function computerPlay(){
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    return randomAnswer
}

//Create a Function to prompt the user and store the typed string in the playerSelection variable for later use it should be case insensitive
function userPlay(){
    playerSelection = prompt('Type rock, paper or scissors:', ' ').toLowerCase()
    return playerSelection
}

//Create a Function to compare each player choice and show the results also give a point to a winner and add it to userScore or computerScore variables if the round doesn't end in a tie.
function playRound(playerSelection, computerSelection){
    playerSelection = userPlay()
    computerSelection = computerPlay()

    switch (true){  

        case playerSelection === 'paper' && computerSelection === 'paper' || 
             playerSelection === 'rock' && computerSelection === 'rock' || 
             playerSelection === 'scissors' && computerSelection === 'scissors':
            let tieMessage = console.log(`You selected ${ playerSelection } and the computer selected ${ computerSelection }\n\nIt's a tie!`)
            tieMessage
        break;

        case playerSelection === 'paper' && computerSelection === 'rock' || 
             playerSelection === 'rock' && computerSelection === 'scissors' ||
             playerSelection === 'scissors' && computerSelection === 'paper':
            userScore += 1
           let victoryMessage = console.log(`You selected ${ playerSelection } and the computer selected ${ computerSelection }\n\nYou Won!.\n\nYour score is: ${ userScore }\nComputer score is: ${ computerScore }`)
           victoryMessage
           
        break;

        case playerSelection === 'paper' && computerSelection === 'scissors' ||
             playerSelection === 'rock' && computerSelection === 'paper' || 
             playerSelection === 'scissors' && computerSelection === 'rock':
            computerScore += 1
          let defeatMessage = console.log(`You selected ${ playerSelection } and the computer selected ${ computerSelection }\n\nYou Lost!.\n\nYour score is: ${ userScore }\nComputer score is: ${ computerScore }`)
          defeatMessage
    
        break;

        default:
          let incorrectMessage =  console.log(`You selected ${ playerSelection } and the computer selected ${ computerSelection }\n\nYou typed an incorrect word. Try rock, paper or scissors.`)
          incorrectMessage
    }
}

//Create Function to call previous functions and start the game, the user will keep playing until someone gets 5 points. Then show the final results and the correct winner depending on the points.
function game() {
while ( userScore < 5 || computerScore < 5 ) {
    playRound() 
        if ( userScore === 5){
            return console.log(`You won!!! \n\nThe final score is:\n\nUser Score: ${ userScore}\nComputer score: ${ computerScore }`)
        }else if( computerScore === 5 ){
            return console.log(`Computer won!!!\n\nThe final score is:\n\nUser Score: ${ userScore}\nComputer score: ${ computerScore }`)
        }else {
            console.log(`We don't have a winner yet. Let's keep playing`)
        } 
    }    
}