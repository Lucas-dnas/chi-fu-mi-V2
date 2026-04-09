//  Constantes
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const paper = document.getElementById('paper');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');
const reset = document.getElementById('reset');


// Other const necessary
const Possibility = ['rock', 'scissor', 'paper', 'lizard', "spock"]
const botPlayRockSoForWin = [Possibility[2], Possibility[4]];
const botPlayScissorSoForWin = [Possibility[0], Possibility[4]];
const botPlayPaperSoForWin = [Possibility[1], Possibility[3]];
const btoPlayLizardSoForWin = [Possibility[0], Possibility[1]];
const btoPlaySpockSoForWin = [Possibility[2], Possibility[3]];

//Variables
let score = 0;
let set = 0;
let botScore = 0;
let choice;
let equality = 0;

rock.addEventListener('click', () => {
    document.getElementById('result').innerHTML = '';
    choice = Possibility[0];
    game(choice)
});

scissor.addEventListener('click', () => {
    document.getElementById('result').innerHTML = '';
    choice = Possibility[1];
    game(choice)
});

paper.addEventListener('click', () => {
    document.getElementById('result').innerHTML = '';
    choice = Possibility[2];
    game(choice)
});

lizard.addEventListener('click', () => {
    document.getElementById('result').innerHTML = '';
    choice = Possibility[3];
    game(choice)
});

spock.addEventListener('click', () => {
    document.getElementById('result').innerHTML = '';
    choice = Possibility[4];
    game(choice)
});

reset.addEventListener('click', () => {
    score = 0;
    botScore = 0;
    set = 0;
    equality = 0;

    document.getElementById('score').innerHTML = '';
    document.getElementById('result-set').innerHTML = '';
    document.getElementById('equality').innerHTML = '';
    document.getElementById('result').innerHTML = 'Good luck bro!';

    rock.disabled = false;
    scissor.disabled = false;
    paper.disabled = false;
    lizard.disabled = false;
    spock.disabled = false;
});


// Functions
function game(userChoice) {

    const botChoice = this.botChoice();
    const index = Possibility.indexOf(botChoice);

    console.log('user: ' + userChoice);
    console.log('bot: ' + botChoice);

    document.getElementById('user-choice').innerHTML = `Player:  ${userChoice}`;
    document.getElementById('bot-choice').innerHTML = `Bot:  ${botChoice}`;

    if (botChoice === userChoice) {
        console.log('égalité');
        document.getElementById('result-set').innerHTML = 'Equality bitch!😏';
        equality++;
        document.getElementById('equality').innerHTML = `Equality: ${equality}`
        return;
    }

    let result;
    switch (index) {
        case 0:
            result = (userChoice === botPlayRockSoForWin[0] || userChoice === botPlayRockSoForWin[1]) ? true : false;
            break;
        case 1:
            result = (userChoice === botPlayScissorSoForWin[0] || userChoice === botPlayScissorSoForWin[1]) ? true : false;
            break;
        case 2:
            result = (userChoice === botPlayPaperSoForWin[0] || userChoice === botPlayPaperSoForWin[1]) ? true : false;
            break;
        case 3:
            result = (userChoice === btoPlayLizardSoForWin[0] || userChoice === btoPlayLizardSoForWin[1]) ? true : false;
            break;
        case 4:
            result = (userChoice === btoPlaySpockSoForWin[0] || userChoice === btoPlaySpockSoForWin[1]) ? true : false;
            break;
        default:
            console.log('What are you played for finish here...?🫤');
            break;
    }

    if (result) {
        console.log('You win this set! 🤩');
        document.getElementById('result-set').innerHTML = 'You win this set! 🤩';
        score++;
        set++;
    } else {
        console.log('Pff loser 😂')
        document.getElementById('result-set').innerHTML = 'Pff loser 😂';
        botScore++;
        set++;
    }

    document.getElementById('score').innerHTML = `Score: ${score}/${set}`

    console.log('Set: ' + set);
    console.log('Score: ' + score);
    console.log('Bot score: ' + botScore);

    endGame();

}

function botChoice() {
    return Possibility[Math.floor(Math.random() * 5)];
}

function endGame() {
    if (set >= 3) {
        if (score > botScore) {
            console.log('Congratulations you win !!');
            result.innerHTML = 'Congratulations you win!!🤑🤩';
            disableBtn();
            return;
        } else {
            console.log('Too bad you are a loser mdrr');
            result.innerHTML = 'Too bad you are a loser!😂';
            disableBtn();
            return;
        }
    }
    return;
}

function disableBtn() {
    rock.disabled = true;
    scissor.disabled = true;
    paper.disabled = true;
    lizard.disabled = true;
    spock.disabled = true;
    return;
}

