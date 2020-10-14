let displayDiv = document.querySelector('#display');
let display = "";
let numberButtons = document.querySelectorAll('.num-btn');
let signButtons = document.querySelectorAll('.sign-btn');
let signs = [' + ',' - ',' * ',' / '];
let clearButton = document.querySelector('#clear');
let equalButton = document.querySelector('#equals');
let stopScreen = false;
let showSigns = false; 

function add(num1,num2) {
    display = Number(display)
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

function operate(operator,num1,num2) {
    return operator(num1,num2);
} 

function displayNums(num) {
    if (stopScreen == false) {
        display = display + num;
        displayDiv.textContent = display;
        showSigns = true;
    }
}

function displaySigns(sign) {
    if (showSigns == true) {
        display = display + sign;
        displayDiv.textContent = display;
        stopScreen = false;
        showSigns = false;
    }
    
    
}

function clearNums() {
    display = "";
    displayDiv.textContent = display;
    stopScreen = false;
    showSigns = false;
}

function calculateResult () {
    num1 = Number(display.split(" ")[0]);
    num2 = Number(display.split(" ")[2]);
    sign = display.split(" ")[1];

    if (sign == '+') {
        display = num1 + num2;
    }

    if (sign == '-') {
        display = num1 - num2;
    }

    if (sign == '*') {
        display = num1 * num2;
    }

    if (sign == '/') {
        display = num1 / num2;
    }
    display = String(display);
    displayDiv.textContent = display;
    stopScreen = true;
}

for (let i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click',() => displayNums(i));
}

for (let i =0; i < signButtons.length; i++) {
    signButtons[i].addEventListener('click',() => displaySigns(signs[i]));
}

clearButton.addEventListener('click',clearNums);

equalButton.addEventListener('click',calculateResult);




