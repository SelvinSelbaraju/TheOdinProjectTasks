let playerMove = "";
const moves = ['rock','paper','scissors'];
let totalScore = 0;
let scoreBox = document.querySelector('#score');
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
}



function playerChoosesRock(player,cpu) {
    let increment = 0;
    if (cpu == 'rock') {
        alert(`You played ${player} and the cpu played ${cpu}. You tie!`);
        increment += 0
    }
    
    else if (cpu == 'paper') {
        alert(`You played ${player} and the cpu played ${cpu}. You lose!`);
        increment += -1
    }

    else {
        alert(`You played ${player} and the cpu played ${cpu}. You win!`);
        increment += 1;
    }

    return increment;
}

function playerChoosesPaper(player,cpu) {
    let increment = 0;
    if (cpu == 'rock') {
        alert(`You played ${player} and the cpu played ${cpu}. You win!`)
        increment += 1;
    }
    
    else if (cpu == 'paper') {
        alert(`You played ${player} and the cpu played ${cpu}. You tie!`)
        increment += 0;
    }

    else {
        alert(`You played ${player} and the cpu played ${cpu}. You lose!`)
        increment += -1;
    }

    return increment;
}

function playerChoosesScissors(player,cpu) {
    let increment = 0
    if (cpu == 'rock') {
        alert(`You played ${player} and the cpu played ${cpu}. You lose!`)
        increment += -1
    }
    
    else if (cpu == 'paper') {
        alert(`You played ${player} and the cpu played ${cpu}. You win!`)
        increment += 1
    }

    else {
        alert(`You played ${player} and the cpu played ${cpu}. You tie!`)
        increment += 0
    }

    return increment;
}


function playGameRock() {
    playerMove = 'rock'
    let cpuGameMove = genCpuMove()
        if (playerMove == 'rock') {
            totalScore += playerChoosesRock(playerMove,cpuGameMove,totalScore);
        }

        else if (playerMove == 'paper') {
            totalScore += playerChoosesPaper(playerMove,cpuGameMove,totalScore);
            
        }

        else {
            totalScore += playerChoosesScissors(playerMove,cpuGameMove,totalScore);
        }
    
    
    scoreBox.textContent = `Score: ${String(totalScore)}`;
        

}

function playGamePaper() {
    playerMove = 'paper'
    let cpuGameMove = genCpuMove()
        if (playerMove == 'rock') {
            totalScore += playerChoosesRock(playerMove,cpuGameMove,totalScore);
        }

        else if (playerMove == 'paper') {
            totalScore += playerChoosesPaper(playerMove,cpuGameMove,totalScore);
            
        }

        else {
            totalScore += playerChoosesScissors(playerMove,cpuGameMove,totalScore);
        }
    
    
    scoreBox.textContent = `Score: ${String(totalScore)}`;
        

}

function playGameScissors() {
    playerMove = 'scissors'
    let cpuGameMove = genCpuMove()
   
        if (playerMove == 'rock') {
            totalScore += playerChoosesRock(playerMove,cpuGameMove,totalScore);
        }

        else if (playerMove == 'paper') {
            totalScore += playerChoosesPaper(playerMove,cpuGameMove,totalScore);
            
        }

        else {
            totalScore += playerChoosesScissors(playerMove,cpuGameMove,totalScore);
        }
    
    
    scoreBox.textContent = `Score: ${String(totalScore)}`;
        

}

const playButton = document.querySelector('#play-button');

playButton.addEventListener('click',genGameButtons);
button1.addEventListener('click',playGameRock);
button2.addEventListener('click',playGamePaper);
button3.addEventListener('click',playGameScissors);

