const display = document.querySelector('#display');
const wrapper = document.getElementById('grid');
let number1 = null;
let number2 = '';
const buttons = document.querySelectorAll('button');
const buttonsArray = Array.from(buttons, el => el.textContent);

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b
};

const operate = function(number1, number2, operator) {
    if (operator == "+") {
        return add(parseFloat(number1), parseFloat(number2))
    }
    else if (operator == "-") {
        return subtract(parseFloat(number1), parseFloat(number2))
    }
    else if (operator == "*") {
        return multiply(parseFloat(number1), parseFloat(number2))
    } 
    else if (operator == "/") {
        return divide(parseFloat(number1), parseFloat(number2))
    } else if (operator == "=") {
        return number2
    }
};

let operator = "=";
resetFlag = true;



function evaluate () {
    if (operator === null || resetFlag) return
    if (operator == "/" && number2 == 0) {
        display.value = "Error";
        number1 = '';
        number2 = '';
        operator = '=';
    } else {
    number1 = operate(number1, number2, operator);
    display.value = number1;
    number2 = ""; 
    }
};

function addFloat () {
    if (display.value.includes(".") ) return
    display.value += ".";
    number2 = number2 + ".";
};

window.addEventListener('keydown', function(event){
    if (['+','-','*','/','=' ].indexOf(event.key) != -1) {
        evaluate();
        operator = event.key;
        resetFlag = true;
    } else if (event.key == "C") {
        number1 = '';
        number2 = '';
        operator = '=';
        display.value = 0;
    } else if (event.key >= 0 && event.key <= 9) {
        number2 += event.key;
        display.value = number2;
        resetFlag = false;
    } else if (event.key === ".") {
        addFloat();
    } else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
        number2 = display.value;
    } else if (event.key === "Enter") {
        event.preventDefault();
        evaluate();
        operator = "=";
        resetFlag = true;
    };
    console.log(event);
    console.log(number2);
});

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
    } else if (buttonValue >= 0 && buttonValue <= 9) {
        number2 += event.target.textContent;
        display.value = parseFloat(number2);
        resetFlag = false;
    } else if (buttonValue === ".") {
        addFloat();
    } else if (buttonValue === "back") {
        display.value = display.value.slice(0, -1);
        number2 = display.value;
    };
    console.log(number1);
    console.log(number2);
});

