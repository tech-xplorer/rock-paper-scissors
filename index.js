
let computerPlay = () => {
	let numRange = Math.floor(Math.random() * 3);
	if(numRange === 0) {
		return 'rock';
	}
	else if(numRange === 1) {
		return 'paper';
	}
	else {
		return 'scissors';
	}
};

let playerPlay = () => {
	let playerChoice = '';
	while(playerChoice !== 'rock' || playerChoice !== 'paper' || playerChoice !== 'scissors') {
		playerChoice += window.prompt('Choose either rock, paper or scissors...').toLowerCase();
		if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
			break;
		}
	}
	return playerChoice;
};

let playRound = (playerSelection, computerSelection) => {
	switch(playerSelection && computerSelection) {
		case 'rock' && 'rock':
			console.log( 'Tied!');
			break;
		case 'rock' && 'paper':
			console.log( 'Computer wins! His paper covers your rocky rock buddy!');
			break;
		case 'rock' && 'scissors':
			console.log( 'Player wins! His rock just smashed the scissors!');
			break;
		case 'paper' && 'rock':
			console.log( 'Player wins! His paper just covered rock!');
			break;
		case 'paper' && 'paper':
			console.log( 'Tie Game!');
			break;
		case 'paper' && 'scissors':
			console.log( 'Computer wins! His paper just cut the scissors!');
			break;
		case 'scissors' && 'rock':
			console.log( 'Computer wins! His rock just smashed scissors!');
			break;
		case 'scissors' && 'paper':
			console.log( 'Player wins! His scissors just cut your paper!');
			break;
		default:
			console.log( 'Tie Game!');
	 	    break;
	}
};


let replay = () => {
	let choice = '';
	while(!choice.startsWith('y')||!choice.startsWith('n')) {
		choice = window.prompt('Would like to play again? : ').toLocaleLowerCase();
		if (choice.startsWith('y') || choice.startsWith('n')) {
			break;
		}
	}
	return choice;
};

let fiveRounds = (playerSelection, computerSelection) => {
	let playerPoints = 0;
	let computerPoints = 0;
	for(let i = 1; i <= 5; i++) {
		playRound(playerPlay(), computerPlay());
		switch (playerSelection && computerSelection) {
			case 'rock' && 'rock':
				console.log(`No points awarded to you guys!`);
				break;
			case 'rock' && 'paper':
				computerPoints += 1;
				console.log(`Computer Points: ${computerPoints}`);
				break;
			case 'rock' && 'scissors':
				playerPoints += 1;
				console.log(`Player Points: ${playerPoints}`);				break;
			case 'paper' && 'rock':
				playerPoints += 1;
				console.log(`player Points: ${playerPoints}`);				break;
			case 'paper' && 'paper':
				console.log('No points awarded!');
				break;
			case 'paper' && 'scissors':
				computerPoints += 1;
				console.log(`Computer Points: ${computerPoints}`);				break;
			    case 'scissors' && 'rock':
				computerPoints += 1;
			 	console.log(`Computer Points: ${computerPoints}`);				break;
			case 'scissors' && 'paper':
				playerPoints += 1;
				console.log(`Player Points: ${playerPoints}`);				break;
			default:
				console.log('No points awarded at this point!');
				break;
	}
}
	if(computerPoints > playerPoints) {
		console.log(`Computer winner! : ${computerPoints}`)
		console.log(`player looser! : ${playerPoints}`);
	}
	else {
		console.log(`Player winner! : ${playerPoints}`)
		console.log(`Computer Looser! : ${computerPoints}`);
  }
}

let gameOn = true;

while (gameOn) {
	fiveRounds(playerPlay(), computerPlay());
	if(replay().startsWith('n')) {
		break;
  }
}
