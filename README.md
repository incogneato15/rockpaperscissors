# rockpaperscissors

         	FUNCTIONS
         	FUNCTIONS
         	FUNCTIONS

This project uses a combination of console and window functions to play
rock paper scissors. 

There are various functions throughout the script.js file

numToChoice checks the user's number choice and fielding for errors
if they enter an invalid choice and then converts them to strings

compareChoice determines the winner of the round by evaluating 
numerical values for user and cpu selection, and increments scores
accordingly.

playAgain returns a bool asking for the user's confirmation to play 
another game after five rounds with the cpu.

getComputerChoice generates a random number 1-3 that stands as
the computer's choice for rock paper scissor

getUserChoice asks the user to enter a number 1-3 for rock, paper,
or scissors

finally, playRound calls various functions to play one complete round of
RPS.

			ABOUT
			ABOUT
			ABOUT

The main code starts at line 130 of script.js

This project operates on a do while loop terminating when the user chooses
not to play again! Nested in this loop is a for loop that increments a
variable for rounds with each reitteration up until 5 rounds or when the
user decides to terminate the game. An array for score and a variable 
for rounds are used to control the gameflow.
