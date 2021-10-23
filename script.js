let userScore = 0 
let computerScore = 0
let playerSelection = ""
let computerSelection = ""

const results = document.querySelector('#results')
results.textContent = `Let's play a game of Rock, Paper, Scissors against the computer. Best of 5 Wins, good luck!`
const userCounter = document.querySelector('#userCounter')
userCounter.textContent = `User Score is: ${userScore}`
const computerCounter = document.querySelector('#computerCounter')
computerCounter.textContent = `Computer Score is: ${computerScore}`

const computerPlay = () =>{
    const answers = ['rock', 'paper', 'scissors']
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    return randomAnswer
}

const updateCounters = () => {
    results.textContent = `You selected ${ playerSelection } and the computer selected ${ computerSelection }.`
    computerCounter.textContent = `Computer Score is: ${computerScore}`
    userCounter.textContent = `User Score is: ${userScore}`
}

const resetGame = () => {
    userScore = 0
    computerScore = 0
    computerCounter.textContent = `Computer Score is: ${computerScore}`
    userCounter.textContent = `User Score is: ${userScore}`
}

const cpuWins = () => {
    computerScore += 1
    updateCounters()
}

const userWins = () => {
    userScore += 1
    updateCounters()
}

const playRound = () => {
    computerSelection = computerPlay()

    if (playerSelection === computerSelection) {
        updateCounters()
    }

    if (playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
        userWins()
    }

    if(playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'rock' && computerSelection === 'paper' || 
        playerSelection === 'scissors' && computerSelection === 'rock') {
        cpuWins()
        }
}

const checkForWin = () =>  {
    if (userScore === 5) {
      results.textContent = `Congratulations you won the match. Final Score is: 
      User: ${userScore} 
      Computer: ${computerScore}. 
      Click on your selection again, to play another match.`
      resetGame()
    }
    if (computerScore === 5) {
      results.textContent = `Aww man you lost the duel :( 
          Final Score is: User: ${userScore} 
          Computer: ${computerScore}. 
          Click on your selection again, to play another match.`
      resetGame()
    }
}

const buttonContainer = document.querySelector('.buttons-container')
  
const handleClick = (event) => {
    playerSelection = event.target.value;
    playRound();
    checkForWin();
}
  
buttonContainer.addEventListener("click", handleClick)
  
