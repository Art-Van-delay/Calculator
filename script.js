// functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        add(a, b);
    } else if (operator === '-') {
        subtract(a, b);
    } else if (operator === '*') {
        multiply(a, b);
    } else {
        divide(a, b);
    }
}

let value = '';
let operator = '';
let space = ' ';

const inputScreen = document.querySelector('.input-screen');
const evalScreen = document.querySelector('eval-screen');


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className === 'digit') {
            console.log(button.id);
            value += button.id;
            inputScreen.textContent = value;
        } else if (button.className === 'operator') {
            operator = button.id + space;
            value += space + operator;
            inputScreen.textContent = value;
        } // elfe is button === 'equals'
    });
});
