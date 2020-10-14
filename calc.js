let displayDiv = document.querySelector('#display');
let display = "";
let numberButtons = document.querySelectorAll('.num-btn');

function add(num1,num2) {
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
    display = display + num;
    displayDiv.textContent = display;
}

for (i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click',displayNums(i))
}