
playRound(playerSelection(), computerSelection());

function getComputerChoice() {
    let choices = ['rock', 'paper', 'sizzors'];
    let randomNum = generateRandomNum(3);

    return choices[randomNum];
}

function generateRandomNum(max) {
    return Math.floor(Math.random() * max)
}

function playerSelection() {
    let playerSelection = prompt('Enter Selection');
    playerSelection.toLowerCase();

    if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'sizzors') {
        alert('invalid choice');
        return;
    }
}

function playRound(playerSelection, computerSelection) {

    let winnerResult = '';
    
    if (playerSelection === 'rock' && computerSelection === 'sizzors' || playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'sizzor' && computerSelection === 'paper') {
        winnerResult = 'Player Wins';
    }
    else {
        winnerResult = 'Player Loses';
    }
}
console.log(getComputerChoice());