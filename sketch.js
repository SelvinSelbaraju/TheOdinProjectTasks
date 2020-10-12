let divs = [];

let container = document.querySelector('#container')
const reset = document.querySelector('#reset');

let columnWidth = "6%";
let rowHeight = "80px";
let columns = "6%";
let rows = "6%";

let side = 16;

for (i=1; i <= side ** 2; i++) {
    divs[i] = document.createElement('div')
    divs[i].setAttribute('class','grid-square')
    container.appendChild(divs[i])
    divs[i].addEventListener('mouseenter', function(e) {
        e.target.setAttribute('class','grid-hover') = 'green'; 
    })
    
    }
for (i=1; i<side; i++) {
columns = columns.concat(' ',columnWidth);
rows = rows.concat(' ',rowHeight);
}

container.style.gridTemplateColumns = columns;
container.style.gridTemplateRows = rows;
columns = "";
rows = "";



function refreshGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let sideValid = false;
    while(sideValid == false){
        side = prompt("How many sides would you like?");
        if(isNaN(side)){
            alert('Please enter a number.');
        }
        else if (Number(side) > 100) {
            alert('Please enter a smaller number.')
        }
        else {
            side = Number(side);
            sideValid = true;
        }
    }

    columnWidth = String(Math.floor(100/side)) + "%";
    rowHeight = String(Math.floor(1280/side)) + "px"; 


    for (i=1; i <= side ** 2; i++) {
        divs[i] = document.createElement('div')
        divs[i].setAttribute('class','grid-square')
        container.appendChild(divs[i])
        divs[i].addEventListener('mouseenter', function(e) {
            e.target.setAttribute('class','grid-hover') = 'green'; 
        })
    }

    for (i=1; i<=side; i++) {
        columns = columns.concat(' ',columnWidth);
        rows = rows.concat(' ',rowHeight);
        }

        container.style.gridTemplateColumns = columns;
        container.style.gridTemplateRows = rows;
        columns = "";
        rows = "";
    
            
}

reset.addEventListener('click',refreshGrid)

console.log(rowHeight)

