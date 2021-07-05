//Welcome to Rock Paper Scissors Console Version TOP 2021

//Console log to welcome the user and give him instructions on how to play
console.log("Let's play Rock Paper Scissors in the console against the computer\n\nThe first to get 5 points wins!!!\n\nTo begin type game() in the console and then type either rock, paper or scissors when prompted")
//Create a global array with the 3 possible answers for computer to choice
let answers = ['rock', 'paper', 'scissors']
//Create a global Variable to store userPlay function returned value
let playerSelection = ""
//Create 2 global variables to store player scores
let userScore = 0
let computerScore = 0
//Create a Function to get a Computer choice randomly from previous array
function computerPlay(){
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    return randomAnswer
}
//Create a Function to prompt the user and store the typed string in the playerSelection variable for later use it should be case insensitive
function userPlay(){
    playerSelection = prompt('Type rock, paper or scissors:','').toLowerCase()
    return playerSelection
}
//Create a Function to compare each player choice and show the results also give a point to a winner and add it to userScore or computerScore variables if the round doesn't end in a tie.
function playRound(playerSelection, computerSelection){
    playerSelection = userPlay()
    computerSelection = computerPlay()

    switch (true){  

        case playerSelection === 'paper' && computerSelection === 'paper':
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nIt's a tie!\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)
        break;

        case playerSelection === 'paper' && computerSelection === 'rock':
            userScore += 1
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nYou Won! Paper beats Rock.\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)
        
        break;

        case playerSelection === 'paper' && computerSelection === 'scissors':
            computerScore += 1
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nYou Lost! Scissors beat Paper.\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)
        
        break;

        case playerSelection === 'rock' && computerSelection === 'rock':
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nIt's a tie!\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)

        break;

        case playerSelection === 'rock' && computerSelection === 'paper':
            computerScore += 1
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nYou Lost! Paper beats Rock.\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)

        break;

        case playerSelection === 'rock' && computerSelection === 'scissors':
            userScore += 1
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nYou Won! Rock beats Scissors.\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)

        break;

        case playerSelection === 'scissors' && computerSelection === 'scissors':
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nIt's a tie!\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)

        break;

        case playerSelection === 'scissors' && computerSelection === 'paper':
            userScore += 1
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nYou Won! Scissors beats Paper.\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)
        
        break;

        case playerSelection === 'scissors' && computerSelection === 'rock':
            computerScore += 1
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nYou Lost! Rock beats Scissors\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}`)
            
        break;
        default:
            console.log(`You selected ${playerSelection} and the computer selected ${computerSelection}\n\nYou typed an incorrect word. Try rock, paper or scissors.\n\nYour score is: ${userScore}\nComputer score is: ${computerScore}.`)
    }
}
//Create Function to call previous functions and start the game, the user will keep playing until someone gets 5 points. Then show the final results and the correct winner depending on the points.
function game() {

    while ( userScore <= 5 || computerScore <= 5 ) {

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

 

