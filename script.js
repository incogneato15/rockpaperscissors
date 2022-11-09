
//converts number selections for rock paper scissors to string values
function numToChoice(num) {
	while(num != 1 || num != 2 || num !=3) {
		switch (num){
			case 1:
				userChoice = 'rock';
				break;
			case 2:
				userChoice = 'paper';
			case 3:
				userChoice = 'scissors'
			default:
				/* put loop here and display message  */
				console.log('Please enter 1 for rock, two for paper or three for scissors.')
		}
	}

	choice = num;
	num = 0;

	return choice;
}

//determines who wins of if it's a tie
function compareChoice(compChoice, userChoice) {
	if (compChoice === userChoice) {
		let result = 'tie!';
	}

	else if ((compChoice === 1 && userChoice === 2) ||
		(compChoice === 2 && userChoice === 3) || 
		(compChoice === 3 && userChoice == 1)) {
		let result = 'you win!';
	}
	else
		let result = 'cp wins.';

	return result;
}

//ensures that user has chosen a valid choice
function userChoiceValid(userInput) {
	userInput = false;

	if (userInput != Nan && userInput > 0 && userInput < 4) {
		userInput = true;
	}
}

//restarts the game
function playAgain() {
	playChoice = prompt('Play again?\nType Y or N')

	if(playChoice = 'Y' || playChoice = 'y') {
		playAgain = true;
	}
	else if(playChoice = 'N' || playChoice = 'n') {
		playAgain = false;
	}
	else {
		playAgain = undefined;
	}
}


//*** ROCK PAPER SCISSORS GO ***

let intro = 'ROCK PAPER SCISSORS GO!\n';

console.log(intro);

//Computer and user choose a r p or s

let compChoice = Math.floor(Math.random() * 3) + 1;

let userChoice = prompt('1. Rock\n2. Paper\n3. Scissors');

while !userChoiceValid(userChoice) {
	console.log('Please select a valid choice');
}

//show choices
let userString = numToChoice(userChoice);
let compString = numToChoice(compChoice);

console.log(`You: ${userString}\nComputer ${compString}`);

//Compare

console.log(compareChoice(compChoice, userChoice));

console.log(playAgain);


