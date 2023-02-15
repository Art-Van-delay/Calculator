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

const firstValue = 0;
const secondValue = 0;
const operator = '';

const screen = document.querySelector('.screen');


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
        if (button.className === 'digit') {
            console.log(button.id);

            screen.textContent = button.id;
        }
    });
});
