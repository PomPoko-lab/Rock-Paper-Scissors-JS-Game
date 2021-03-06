/* User provides an input of rock, paper, or scissors
The computer will provide an input of either.
Compare the two inputs. If input is better than input, owner wins.
*/

const gameChoices = ['rock', 'paper', 'scissor']; // Array of possible choices

/**
 * Computer chooses a random choice from gameChoices array
 * @param {string} choice 
 * @returns 
 */

const computerPlay = () => {
    choice = gameChoices;
    return choice[Math.floor(Math.random() * choice.length)];
};

/**
 * Forces user to enter a valid choice from gameChoices array
 * @param {string} choice 
 * @returns 
 */

// const playerPlay = () => {

//     let userInput = prompt('So, rock, paper, or scissor?: ').toLowerCase(); // Grabs user input into a variable.

//     while (!(gameChoices.includes(userInput))){
//         userInput = prompt('Please play correctly: ').toLowerCase();
//     }
//     return userInput;
// };

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
        return 'WIN';
    } else {
        return 'LOSE';
    }
}

/**
 * Plays the game 5 times.
 * @returns 
 */

const game = () => {

    let cpuWins = 0;
    let playerWins = 0;

    for (let i = 1; i <= 5; i++) {

        let roundPlay = playRound(computerPlay(), playerPlay());

        roundPlay;

        if (roundPlay.includes('win')) {
            playerWins++;
            console.log(roundPlay);
        } else {
            cpuWins++;
            console.log(roundPlay);
        };
    }

    if (playerWins > cpuWins) {
        return `Winner! 
        You won ${playerWins} rounds. CPU won ${cpuWins} rounds.`;
    } else {
        return `Game Over. 
        You won ${playerWins} rounds. CPU won ${cpuWins} rounds.`;
    }
}

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissor = document.querySelector('#scissor');
const computerChoice = document.querySelector('.computer-choice');
const gameResults = document.querySelector('.results');

let playerPlay;

buttonRock.addEventListener('click', () => {
    playerPlay = 'rock';
    computerRoll = computerPlay();
    computerChoice.style.display = 'block';
    computerChoice.textContent = computerRoll;
    gameResults.textContent = playRound(computerRoll, playerPlay);
})

buttonPaper.addEventListener('click', () => {
    playerPlay = 'paper';
    computerRoll = computerPlay();
    computerChoice.style.display = 'block';
    computerChoice.textContent = computerRoll;
    gameResults.textContent = playRound(computerRoll, playerPlay);
})
buttonScissor.addEventListener('click', () => {
    playerPlay = 'scissor';
    computerRoll = computerPlay();
    computerChoice.style.display = 'block';
    computerChoice.textContent = computerRoll;
    gameResults.textContent = playRound(computerRoll, playerPlay);
})