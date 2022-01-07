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

/**
 * Plays a single round of the game
 * @param {string} cpuchoice 
 * @param {string} playerchoice 
 * @returns 
 */

const playRound = (cpuchoice, playerchoice) => {
    
    if (cpuchoice === 'rock' && playerchoice === 'paper' ||
    cpuchoice === 'paper' && playerchoice === 'scissor' ||
    cpuchoice === 'scissor' && playerchoice === 'rock') {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

const game = () => {

    let cpuWins = 0;
    let playerWins = 0;
    let roundPlay = playRound(computerSelection, playerSelection);

    for (let i = 0; i <= 5; i++) {
        if (roundPlay.includes('win')) {
            playerWins++;
        } else {
            cpuWins++;
        };
    }
}

let computerSelection = computerPlay(gameChoices);
let playerSelection = playerPlay();

// console.log(playRound(computerSelection, playerSelection));

// // console.log(game());

// console.log(playRound(computerSelection, playerSelection).includes('win'));
