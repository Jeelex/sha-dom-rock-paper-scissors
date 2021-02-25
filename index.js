const playerSelection = '';
const computerSelection = computerPlay();
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const playerScoreNumber = document.getElementById('playerScoreNumber');
const computerScoreNumber = document.getElementById('computerScoreNumber');
const roundScore = document.getElementById('roundScore');
const winner = document.getElementById('winner');

let result;
let playerScore = 0;
let computerScore = 0;
let playerScoreTotal = 0;
let computerScoreTotal = 0;

// ********					  Button Event Listeners
btnRock.addEventListener('click', () => {
	playRound('rock', computerSelection);
	playerScoreNumber.textContent = playerScoreTotal;
	computerScoreNumber.textContent = computerScoreTotal;
	checkWinner(playerScoreTotal, computerScoreTotal);
});

btnPaper.addEventListener('click', () => {
	playRound('paper', computerSelection);
	playerScoreNumber.textContent = playerScoreTotal;
	computerScoreNumber.textContent = computerScoreTotal;
	checkWinner(playerScoreTotal, computerScoreTotal);
});

btnScissors.addEventListener('click', () => {
	playRound('scissors', computerSelection);
	playerScoreNumber.textContent = playerScoreTotal;
	computerScoreNumber.textContent = computerScoreTotal;
	checkWinner(playerScoreTotal, computerScoreTotal);
});

// TODO		 This is better written than the previous version in the original RPS repo. Need to update it.
function checkWinner(player1Score, player2Score) {
	if (player1Score >= 5) {
		winner.textContent = "You're the WINNER!";
	} else if (player2Score >= 5) {
		winner.textContent = 'Computer wins! You LOSE!';
	}
}

function playRound(playerSelection, computerSelection) {
	playerScore = 0;
	computerScore = 0;

	computerSelection = computerPlay();

	if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore++;
		result = 'You Lose!';
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		playerScore++;
		computerScore++;
		result = "It's a draw!";
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (
		playerSelection === 'scissors' &&
		computerSelection === 'paper'
	) {
		playerScore++;
		result = 'You Win!';
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		playerScore++;
		result = 'You Win!';
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (
		playerSelection === 'paper' &&
		computerSelection === 'scissors'
	) {
		computerScore++;
		result = 'You Lose!';
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (
		playerSelection === 'scissors' &&
		computerSelection === 'scissors'
	) {
		playerScore++;
		computerScore++;
		result = "It's a draw!";
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		playerScore++;
		computerScore++;
		result = "It's a draw!";
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		playerScore++;
		result = 'You Win!';
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		result = 'You Lose!';
		roundScore.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
	}

	playerScoreTotal += playerScore;
	computerScoreTotal += computerScore;
}

function computerPlay() {
	// creating random number from 1 to 3
	randomNum = Math.floor(Math.random() * 3 + 1);

	//   switch statement to determine what the above random number represents
	let computerChoice;
	switch (randomNum) {
		case 1:
			return (computerChoice = 'rock');
			break;
		case 2:
			return (computerChoice = 'paper');
			break;
		case 3:
			return (computerChoice = 'scissors');
			break;
	}
}
