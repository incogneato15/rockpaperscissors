


//converts number selections for rock paper scissors to string values
function numToChoice(num) {
	let choice; 

	switch (num) {
		case 1:
			choice = 'rock';
			break;
		case 2:
			choice = 'paper';
			break;
		case 3:
			choice = 'scissors';
			break;
		default: //error recollect data and recallibrate round
			choice = undefined;
			round--;
			window.alert('nope! only enter 1, 2, or 3.');
	}

	num = 0;

	return choice;
}

//determines who wins or if it's a tie.
//score[0] is user, score[1] is cpu.

function compareChoice(compChoice, userChoice) {
	let result;

	if (userChoice === undefined) {
		console.log('error');
		prompt('please enter\n1 ROCK\n2 PAPER\n3 SCISSORS\n to continue.');
	}
	else if (compChoice === userChoice) {
		result = 'tie!';
		score[0]++;
		score[1]++;
	}

	else if ((compChoice === 1 && userChoice === 2) ||
		(compChoice === 2 && userChoice === 3) || 
		(compChoice === 3 && userChoice == 1)) {
		
		result = 'you win!';
		score[0]++;
	}
	else if ((userChoice === 1 && compChoice === 2) ||
		(userChoice === 2 && compChoice === 3) ||
		(userChoice === 3 && compChoice ===1)) {
		result = 'cp wins.';
		score[1]++;
	}
	else {
		console.log('error')
	}

	return result;
}



//restarts the game
function playAgain() {
	let play = prompt('Play again?\nType Y to continue or any other key to exit');

	if (play == 'Y' || play == 'y') {
		play = true;
	}
	else {
		play = false;
	}
	return play;
}

//gets computer choice
function getCompChoice() {
	let choice = Math.floor(Math.random() * 3) + 1;
	return choice;
}

//gets choice from user
function getUserChoice() {
	let choice = parseInt(prompt('1. Rock\n2. Paper\n3. Scissors'));
	return choice;
}

//plays a round of r p s
function playRound() {

	//Computer and user choose a r p or s

	let compChoice = getCompChoice();
	let userChoice;

	//gets userChoice & repeats if invalid
	do {
		userChoice = getUserChoice();
	}
	while (userChoice > 3 || userChoice < 1 || userChoice === undefined)
	//show choices


	let userString = numToChoice(userChoice);

	let compString = numToChoice(compChoice);

	console.log(`You: ${userString}\nComputer: ${compString}`);

	//Compare

	console.log(compareChoice(compChoice, userChoice));

	console.log(`Your score ${score[0]}\n   vs\nComputer score ${score[1]}`);
}




//
//*** ROCK PAPER SCISSORS GO ***
//


//an array to keep score
let score = [0, 0];
let round = 1;

do {
	for (round === 1; round < 6; round++) {
		let intro = 'Round ' + round + ' of 5\nROCK PAPER SCISSORS GO!\n';
		console.log(intro);

		playRound();
	}

	let boolPlay = playAgain();
		
	if (boolPlay === true)	{
		//reset round and scores
		round = 1;
		score = [0,0];
	}
	else {
		//otherwise terminate game by
		//trigger while condition
		round = 7;
	}

	console.log(`round is ${round}`);
}
while (round < 6)
