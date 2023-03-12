// Array operations
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
// Placeholder variables
let value = '';
let operator = '';
let space = ' ';

// Document selectors
const inputScreen = document.querySelector('.input-screen');
const buttons = document.querySelectorAll('button');

// Event listener for each button depending on criterion
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Problem array is the input value from the user
        // Problem array is the value which the arithmetic will be performed on
        let problemArray = [];

        // Update input screen with value of digit input
        // Append value to digit
        if (button.className === 'digit') {
            console.log(button.id);
            value += button.id;
            inputScreen.textContent = value;
            // if button is an operator append that value to value and input screen
        } else if (button.className === 'operator') {
            operator = button.id + space;
            value += space + operator;
            inputScreen.textContent = value;
            // if button is the evaluate button split value into an array
            // perform operation on values of array depending on operator
            // Reset value and problemArray for new equation
        } else if (button.id === '=') {
            problemArray = value.split(" ");
            console.log(problemArray);
            console.log(operateOnArray(problemArray));
            inputScreen.textContent = operateOnArray(problemArray);
            value = '';
            problemArray = [];
            // Clear value and array
        } else if (button.id === 'clear') {
            value = '';
            problemArray = [];
            inputScreen.textContent = value;
            // Remove last value from input screen on button press
        } else if (button.id === 'delete') {
            inputScreen.textContent = inputScreen.textContent.toString().slice(0, -1);
        }
    });
});
