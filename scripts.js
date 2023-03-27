//defining variables as empty so when clicked
//textContent can grab value/operator
let previousValue = "";
let operator = "";
let currentValue = "";

//variable decleration of querySelectors to select everything that will
//be manipulated in html document
const displayPreviousValue = document.querySelector(".input-display");
const displayCurrentValue = document.querySelector(".input-display");

const numbers = document.querySelectorAll(".numberButton");

const decimal = document.querySelector(".decimalButton");

const equal = document.querySelector(".equalButton");


const clear = document.querySelector(".clearButton");

const operators = document.querySelectorAll(".operator");

numbers.forEach((number) => number.addEventListener("click", function(e) {
    handleNumber(e.target.textContent)
    displayCurrentValue.textContent = currentValue;
})) 
//for each of the querySelected numbers taking paramater 'number', an event
//listener 'click' is added to each number taking variable 'e' or 'event
//using function handleNumber the click event acquires the textContent from
//the button being pressed, a number value
//the textContent acquired is displayed on div input-display, and is also
//this displayed textContent updates the currentValue variable

function handleNumber(num) {
    if(previousValue !== "" && currentValue !=="" && operator === "") {
        previousValue = "";
        displayCurrentValue.textContent = currentValue;
    }
    if(currentValue.length <= 9) {
    currentValue += num;
    }
}

operators.forEach((op) => op.addEventListener("click", function(e) {
    handleOperator(e.target.textContent)
    displayCurrentValue.textContent = previousValue + " " + operator;
}))

// function handleOperator(op) {
    // operator = op;
    // previousValue = currentValue;
    // currentValue = '';
// }

function handleOperator(op) {
    if (previousValue === "") {
        previousValue = currentValue;
        operatorCheck(op);
    } else if (currentValue === "") {
        operatorCheck(op);
    } else {
        calculate();
        operator = op;
        displayCurrentValue.textContent = "0";
        displayCurrentValue.textContent = previousValue + "" + operator;
    }
}

function operatorCheck(text) {
    operator = text;
    displayPreviousValue.textContent = previousValue + "" + operator;
    displayCurrentValue.textContent = "0";
    currentValue = "";
}

clear.addEventListener("click", function() {
    previousValue = '';
    operator = '';
    currentValue ='';
    displayCurrentValue.textContent = currentValue;
})

equal.addEventListener("click", function() {
    calculate();
    displayPreviousValue.textContent = '';
    displayCurrentValue.textContent = previousValue;
})

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    //string to actual number value//

    if(operator === "+") {
        previousValue += currentValue;
    } else if(operator === "-") {
        previousValue -= currentValue;
    } else if(operator === "x") {
        previousValue *= currentValue;
    } else if(operator === "÷") {
        previousValue /= currentValue;
    }
    displayPreviousValue.textContent = "";
    operator = "";
    currentValue = "";
    Math.round(previousValue * 1000) / 1000;
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

decimal.addEventListener("click", function() {
    addDecimal();
})

function addDecimal() {
    if(!currentValue.includes(".")) {
        currentValue += '.';
        displayCurrentValue.textContent = currentValue;
    }
}


