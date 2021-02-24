const playerSelection = ''
const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))
let result
let playerScore = 0
let computerScore = 0
let playerScoreTotal = 0
let computerScoreTotal = 0

function game() {
  // *                     5 round game using for loop
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection)
  }

  // !                   colors in console currently working ONLY in Google Chrome
  console.log(
    '\x1b[35m%s\x1b[0m',
    `Player Total: ${playerScoreTotal}, Computer Total: ${computerScoreTotal}`
  )

  return checkWinner(playerScoreTotal, computerScoreTotal)
}
game()

// TODO          need to use generic parameters to make function generally usable
function checkWinner(playerScoreTotal, computerScoreTotal) {
  if (playerScoreTotal > computerScoreTotal) {
    console.log('\x1b[42m%s\x1b[0m', "You're the WINNER!")
  } else if (playerScoreTotal === computerScoreTotal) {
    console.log('\x1b[33m%s\x1b[0m', "It's a DRAW!")
  } else {
    console.log('\x1b[31m%s\x1b[0m', 'You LOSE!')
  } 
}

function playRound(playerSelection, computerSelection) {
  playerScore = 0
  computerScore = 0

  computerSelection = computerPlay()
  playerSelection = prompt("PLEASE TYPE:  rock, paper or scissors").toLowerCase()
  console.log(`Player: ${playerSelection}`)
  console.log(`Computer: ${computerSelection}`)

  // TODO            might be better to turn the if statement below into a switch statement???

  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    result = 'You Lose!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    playerScore++
    computerScore++
    result = "It's a draw!"
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    result = 'You Win!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    result = 'You Win!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    result = 'You Lose!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    playerScore++
    computerScore++
    result = "It's a draw!"
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    playerScore++
    computerScore++
    result = "It's a draw!"
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    result = 'You Win!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    result = 'You Lose!'
    console.log(`Player: ${playerScore}, Computer: ${computerScore} -> ${result}`)
  } else {
    console.log("Sorry! You can only choose between 'rock', 'paper' or 'scissors' !")
  }

  playerScoreTotal += playerScore
  computerScoreTotal += computerScore
}

function computerPlay() {
  // creating random number from 1 to 3
  randomNum = Math.floor(Math.random() * 3 + 1)

  //   switch statement to determine what the above random number represents
  let computerChoice
  switch (randomNum) {
    case 1:
      return (computerChoice = 'rock')
      break
    case 2:
      return (computerChoice = 'paper')
      break
    case 3:
      return (computerChoice = 'scissors')
      break
  }
}
