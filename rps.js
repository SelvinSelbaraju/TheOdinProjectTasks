let playerMove = "";
const moves = ['rock','paper','scissors'];
let totalScore = 0;
let scoreBox = document.querySelector('#score');
scoreBox.textContent = `Score: ${String(totalScore)}`;



function genCpuMove() {
    let moveIndex = Math.floor(Math.random()*moves.length);
    let cpuMove = moves[moveIndex];
    return cpuMove; 
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


function playGame() {
    let cpuGameMove = genCpuMove()
    console.log(cpuGameMove)
    playerMove = prompt("Please enter your move:").toLowerCase();
    if (moves.includes(playerMove) == false) {
        alert("You have entered an invalid move. Try again.");
    }
    
    else {
        if (playerMove == 'rock') {
            totalScore += playerChoosesRock(playerMove,cpuGameMove,totalScore);
        }

        else if (playerMove == 'paper') {
            totalScore += playerChoosesPaper(playerMove,cpuGameMove,totalScore);
            
        }

        else {
            totalScore += playerChoosesScissors(playerMove,cpuGameMove,totalScore);
        }

    }
    scoreBox.textContent = `Score: ${String(totalScore)}`;
    

}

const playButton = document.querySelector('#play-button');

playButton.addEventListener('click',playGame);
