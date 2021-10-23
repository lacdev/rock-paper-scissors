let userScore = 0 
let computerScore = 0
let playerSelection = ""
let computerSelection = ""

const results = document.querySelector('#results')
results.textContent = `Let's play a game of Rock, Paper, Scissors against the computer.`
const userCounter = document.querySelector('#userCounter')
userCounter.textContent = `User Score is: ${userScore}`
const computerCounter = document.querySelector('#computerCounter')
computerCounter.textContent = `Computer Score is: ${computerScore}`

function computerPlay(){
    const answers = ['rock', 'paper', 'scissors']
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    return randomAnswer
}

function updateCounters () {
    results.textContent = `You selected ${ playerSelection } and the computer selected ${ computerSelection }.`
    computerCounter.textContent = `Computer Score is: ${computerScore}`
    userCounter.textContent = `User Score is: ${userScore}`
}

function cpuWins () {
    computerScore += 1
    updateCounters()
}

function userWins () {
    userScore += 1
    updateCounters()
}

function playRound() {
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

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', (event)=> {
        playerSelection = event.target.id  
        playRound()

        if (userScore === 5) {
            results.textContent = `Congratulations you won the match`
            userScore = 0
            computerScore = 0
        }

        if (computerScore === 5) {
            results.textContent = `Aww man you lost the duel :(`
            userScore = 0
            computerScore = 0
        }
    })
})

