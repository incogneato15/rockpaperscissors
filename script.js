


//converts number selections for rock paper scissors to string values
function numToChoice(num) {
	
	switch (num) {
		case 1:
			userChoice = 'rock';
			break;
		case 2:
			userChoice = 'paper';
			break;
		case 3:
			userChoice = 'scissors';
			break;
		default:
			userChoice = undefined;
	}

	choice = userChoice;
	num = 0;

	return choice;
}

//determines who wins of if it's a tie
function compareChoice(compChoice, userChoice) {
	let result;

	if (compChoice === userChoice) {
		result = 'tie!';
	}

	else if ((compChoice === 1 && userChoice === 2) ||
		(compChoice === 2 && userChoice === 3) || 
		(compChoice === 3 && userChoice == 1)) {
		result = 'you win!';
	}
	else {
		result = 'cp wins.';
	}

	return result;
}

//ensures that user has chosen a valid choice
function userChoiceValid(userInput) {
	userInput = false;

	if (userInput != NaN && userInput > 0 && userInput < 4) {
		userInput = true;
	}

	return userInput;
}

//restarts the game
function playAgain() {
	let playChoice = prompt('Play again?\nType Y to continue or any other key to exit');

	if (playChoice == 'Y' || playChoice == 'y') {
		playAgain = true;
	}
	else {
		playAgain = false;
	}
}


//*** ROCK PAPER SCISSORS GO ***

let intro = 'ROCK PAPER SCISSORS GO!\n';

console.log(intro);

//Computer and user choose a r p or s

let compChoice = Math.floor(Math.random() * 3) + 1;

let userChoice = parseInt(prompt('1. Rock\n2. Paper\n3. Scissors'));
/*
do {
	userChoiceValid(userChoice);
}
while (userChoiceValid(userChoice) == false);
*/

//show choices
let userString = numToChoice(userChoice);

let compString = numToChoice(compChoice);

console.log(`You: ${userString}\nComputer: ${compString}`);

//Compare

console.log(compareChoice(compChoice, userChoice));

playAgain();