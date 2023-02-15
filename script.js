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
//let secondValue = 0;
let operator = '';

const screen = document.querySelector('.screen');


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className === 'digit') {
            console.log(button.id);
            value += button.id;
            screen.textContent = value;
        } else if (button.className === 'operator') {
            value = '';
            operator = button.id;
            screen.textContent = button.id;
        }
    });
});
