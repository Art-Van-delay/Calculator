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

function operateOnArray(array) {
    let firstValue = parseInt(array[0]);
    let operator = array[1];
    let secondValue = parseInt(array[2]);
    if (operator === '+') {
        return firstValue + secondValue;
    } else if (operator === '-') {
        return firstValue - secondValue;
    } else if (operator === '*') {
        return firstValue * secondValue;
    } else if (operator === '/') {
        return firstValue / secondValue;
    } else {
        return 'Error'
    }
}

let value = '';
let operator = '';
let space = ' ';


const inputScreen = document.querySelector('.input-screen');



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let problemArray = [];
        if (button.className === 'digit') {
            console.log(button.id);
            value += button.id;
            inputScreen.textContent = value;
        } else if (button.className === 'operator') {
            operator = button.id + space;
            value += space + operator;
            inputScreen.textContent = value;
        } else if (button.id === '=') {
            // evaulatedValue = Parser.evaluate(value);

            problemArray = value.split(" ");
            console.log(problemArray);
            console.log(operateOnArray(problemArray));
            //evalScreen.textContent = operateOnArray(problemArray);
            inputScreen.textContent = operateOnArray(problemArray);
            value = '';
            problemArray = [];
        } else if (button.id === 'clear') {
            value = '';
            problemArray = [];
            inputScreen.textContent = value;
        } else if (button.id === 'delete') {
            // let deletedValueArray = problemArray.pop();
            // console.log(`${deletedValueArray}`);
            // inputScreen.textContent = deletedValueArray;
            inputScreen.textContent = inputScreen.textContent.toString().slice(0, -1);
        }
    });
});
