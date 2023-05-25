const display = document.querySelector('#display');
const wrapper = document.getElementById('grid');
let number1 = null;
let number2 = '';
const operators = document.querySelectorAll('button.operator');
const operatorsArray = Array.from(operators, el => el.textContent);

const add = function(number1, number2) {
    return number1 + number2;
};

const subtract =function(number1, number2) {
    return number1 - number2
};

const multiply = function (number1, number2) {
    return number1 * number2
};

const divide = function(number1, number2) {
    return number1 / number2
};

const operate = function(number1, number2, operator) {
    if (operator == "+") {
        return add(number1, number2)
    }
    else if (operator == "-") {
        return subtract(number1, number2)
    }
    else if (operator == "*") {
        return multiply(number1, number2)
    } 
    else if (operator == "/") {
        return divide(number1, number2)
    } else if (operator == "=") {
        return number2
    }
};

let operator = "=";
resetFlag = true;



function evaluate () {
    if (operator === null || resetFlag) return
    number2 = parseInt(display.value);
    number1 = operate(number1, number2, operator);
    display.value = number1;
    number2 = ""; 
};

wrapper.addEventListener('click', (event) => {
    let buttonValue = event.target.textContent;
    if (['+','-','*','/','=' ].indexOf(buttonValue) != -1) {
        evaluate ();
        operator = buttonValue;
        resetFlag = true;

    } else if (buttonValue == "C") {
        number1 = null;
        number2 = '';
        operator = '=';
        display.value = 0;
    } 
    else if (buttonValue >= 0 && buttonValue <= 9) {
        number2 += event.target.textContent
        display.value = number2;
        resetFlag = false;
    };
    console.log(number1);
    console.log(number2);
});
