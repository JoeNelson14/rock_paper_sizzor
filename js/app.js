const PLAYER_CHOICE_BUTTONS = document.querySelectorAll('button');
const SCREEN = document.querySelector('.output-screen');
const ROUND_DOTS = document.querySelectorAll('.score-dot');
const PLAYER_SCREEN = document.querySelector('.output-choice.player');
const COMPUTER_SCREEN = document.querySelector('.output-choice.computer');

let playerWinCount = 0;
let computerWinCount = 0;
let roundCount = 0;

function getComputerSelection() {
    //creates selection array for computer to choose from
    let choices = ['rock', 'paper', 'scissors'];
    let randomNum = generateRandomNum();
    //displays computer selection to webpage
    COMPUTER_SCREEN.textContent = choices[randomNum];

    //returns computers selection
    return choices[randomNum];
}

function generateRandomNum() {
    //generates number either 0, 1, or 2
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    let winnerResult = '';

    //checks if player won
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') 
    {
        //sets winner to player, increases player and round count by 1, changes dot display to green
        winnerResult = 'player';
        playerWinCount++;
        roundCount++;
        ROUND_DOTS[roundCount -1].style.backgroundColor = 'green';
    }
    //checks if both computer and player selection is the same
    else if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'paper' ||
    playerSelection === 'scissors' && computerSelection === 'scissors') 
    {
        //sets winner to tied, increases round count and changes dot display to white
        winnerResult = 'tied';
        roundCount++;
        ROUND_DOTS[roundCount -1].style.backgroundColor = 'white';
    }
    else //if not tie game or player didn't win, then computer won
    {
        //sets winner to computer, increased computer and round count by 1, changes dot display to red
        winnerResult = 'computer';
        computerWinCount++;
        roundCount++;
        ROUND_DOTS[roundCount -1].style.backgroundColor = 'red';
    }
    
    //returns winner of that round
    return winnerResult;
}

function game(playerChoice) {
    PLAYER_SCREEN.textContent = playerChoice;
    let roundWinner = playRound(playerChoice, getComputerSelection());
    
    //checks if round count is 5 to determin is game is over
    if (roundCount == 5)
    {
        //displays if player wins or loses or tie game to web page
        if (playerWinCount > computerWinCount)
        {
            SCREEN.textContent = 'Player Wins Game';
        }
        else if (computerWinCount > playerWinCount)
        {
            SCREEN.textContent = 'Player Loses Game';
        }
        else
        {
            SCREEN.textContent = 'Tie Game!';
        }
        return;
    }
    
    //displays round winner to web page
    if (roundWinner === 'player')
    {
        SCREEN.textContent = 'Player Wins Round';
    }
    else if (roundWinner === 'computer')
    {
        SCREEN.textContent = 'Computer Wins Round';
    }
    else
    {
        SCREEN.textContent = 'Tie';
    }

}

function resetGame() {
    //resets all count variables back to 0 and clears all screens
    playerWinCount = 0;
    computerWinCount = 0;
    roundCount = 0;
    SCREEN.textContent = '';
    PLAYER_SCREEN.textContent = '';
    COMPUTER_SCREEN.textContent = '';
    
    //loops through all dot displays and resets background color to nothing
    for (let i = 0; i < ROUND_DOTS.length; i++)
    {
        ROUND_DOTS[i].style.backgroundColor = '';
    }
}

//loops through all player button choices and adds click event listener
for (let i = 0; i < PLAYER_CHOICE_BUTTONS.length; i++)
    {
        PLAYER_CHOICE_BUTTONS[i].addEventListener('click', () => {
            //gets button text content and makes it all lower case
            playerChoice = PLAYER_CHOICE_BUTTONS[i].textContent.toLowerCase();

            //checks if player clicked new game
            if (playerChoice ==='new game')
            {
                resetGame();
            }
            else // if not new game, then start game by calling game function and passing player choice
            {
                game(playerChoice);
            }
            
        });
    }