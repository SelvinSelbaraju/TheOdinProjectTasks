let playerMove = "";
const moves = ['rock','paper','scissors'];
let totalScore = 0;
let scoreBox = document.querySelector('#score');
let cpuDiv = document.querySelector('#cpu');
scoreBox.textContent = `Score: ${String(totalScore)}`;

let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');
button1.type = 'button';
button2.type = 'button';
button3.type = 'button';
button1.setAttribute('class','btn');
button2.setAttribute('class','btn');
button3.setAttribute('class','btn');

let cpuResult = document.createElement('div');
cpuResult.setAttribute('id','cpu-result');
cpuResult.textContent = 'CPU chose: ';




function genCpuMove() {
    let moveIndex = Math.floor(Math.random()*moves.length);
    let cpuMove = moves[moveIndex];
    return cpuMove; 
}

function genGameButtons() {
    let gameDiv = document.querySelector('#game-div');
    button1.textContent = 'Rock';
    button2.textContent = 'Paper';
    button3.textContent = 'Scissors';
    gameDiv.appendChild(button1);
    gameDiv.appendChild(button2);
    gameDiv.appendChild(button3);
    cpuDiv.appendChild(cpuResult);   
}


function playerChoosesRock(player,cpu) {
    let increment = 0;
    if (cpu == 'rock') {
        increment += 0;
    }
    
    else if (cpu == 'paper') {
        increment += -1;
    }

    else {
        increment += 1;
    }
    cpuResult.textContent = `CPU chose: ${cpu}`;
    return increment;
}

function playerChoosesPaper(player,cpu) {
    let increment = 0;
    if (cpu == 'rock') {
        increment += 1;
    }
    
    else if (cpu == 'paper') {
        increment += 0;
    }

    else {
        increment += -1;
    }
    cpuResult.textContent = `CPU chose: ${cpu}`;
    return increment;
}

function playerChoosesScissors(player,cpu) {
    let increment = 0;
    if (cpu == 'rock') {
        increment += -1;
    }
    
    else if (cpu == 'paper') {
        increment += 1;
    }

    else {
        increment += 0;
    }
    cpuResult.textContent = `CPU chose: ${cpu}`;
    return increment;
}


function playGameRock() {
    playerMove = 'rock'
    let cpuGameMove = genCpuMove()
    totalScore += playerChoosesRock(playerMove,cpuGameMove,totalScore);
    scoreBox.textContent = `Score: ${String(totalScore)}`;
        }
function playGamePaper() {
    playerMove = 'paper'
    let cpuGameMove = genCpuMove()
    totalScore += playerChoosesPaper(playerMove,cpuGameMove,totalScore);
    scoreBox.textContent = `Score: ${String(totalScore)}`;
}

function playGameScissors() {
    playerMove = 'scissors'
    let cpuGameMove = genCpuMove()
    totalScore += playerChoosesScissors(playerMove,cpuGameMove,totalScore);
    scoreBox.textContent = `Score: ${String(totalScore)}`;
}


const playButton = document.querySelector('#play-button');

playButton.addEventListener('click',genGameButtons);
button1.addEventListener('click',playGameRock);
button2.addEventListener('click',playGamePaper);
button3.addEventListener('click',playGameScissors);

