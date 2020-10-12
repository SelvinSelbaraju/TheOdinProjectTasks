let container = document.querySelector('#container');
let divs = [];
const resetButton = document.querySelector('#reset')

function changeColor(div) {
    div.setAttribute('class','grid-hover');
}

function genDivs (num) {
    divs = [];
    for (i=0; i<num**2; i++) {
        divs[i] = document.createElement('div');
        divs[i].setAttribute('class','grid-square');
        divs[i].textContent = i+1; 
        container.appendChild(divs[i]);
        divs[i].addEventListener('mouseenter',function (event) {
        event.target.setAttribute('class','grid-hover') = 'green';
        });
    }
}

function resetDivs() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    let numDivs = Number(prompt('Please enter row/column length: '));
    genDivs(numDivs);
}

resetButton.addEventListener('click',resetDivs);

genDivs(16)

