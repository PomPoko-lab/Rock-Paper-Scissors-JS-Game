/* User provides an input of rock, paper, or scissors
The computer will provide an input of either.
Compare the two inputs. If input is better than input, owner wins
*/

const gameChoices = ['rock', 'paper', 'scissor']; // Array of possible choices

/**
 * Computer chooses a random choice from gameChoices array
 * @param {string} choice 
 * @returns 
 */

const computerPlay = choice => {
    return choice[Math.floor(Math.random() * choice.length)];
};

/**
 * Forces user to enter a valid choice from gameChoices array
 * @param {string} choice 
 * @returns 
 */

const playerPlay = () => {

    let userInput = prompt('So, rock, paper, or scissor?: ').toLowerCase(); // Grabs user input into a variable.
    
    while (!(gameChoices.includes(userInput))){
        userInput = prompt('Please play correctly: ').toLowerCase();
    }
    return userInput;
};

const playRound = (cpuchoice, playerchoice) => {
    const playerWin = 'You win!';
    const cpuWin = 'You lose!';
    
    if (cpuchoice === 'rock' && playerchoice === 'paper' ||
    cpuchoice === 'paper' && playerchoice === 'scissor' ||
    cpuchoice === 'scissor' && playerchoice === 'rock') {
        return playerWin;
    } else {
        return cpuWin;
    }
}

let computerSelection = computerPlay(gameChoices);
let playerSelection = playerPlay();

console.log(playRound(computerSelection, playerSelection));


// console.log(playerPlay(userInput));