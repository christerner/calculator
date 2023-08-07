let currentValue = '';
let previousValue = '';
let operator = '';
document.addEventListener("DOMContentLoaded", function () {

    // Variables
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function (e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    }))

    operators.forEach((op) => op.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))
    clear.addEventListener("click", () => {
        previousValue = "";
        currentValue = "";
        operator = "";
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })
    equal.addEventListener("click", () => {
        if (currentValue != '' && previousValue != '') {
            calculate()
            previousScreen.textContent = '';
            if (previousValue.length <= 5) {
                currentScreen.textContent = previousValue;
            }
            else {
                currentScreen.textContent = previousValue.slice(0, 5) + "..."
            }
        }
    })
    decimal.addEventListener("click", () => {
        addDecimal();
       
    })
})
function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator += op;
    previousValue = currentValue;
    currentValue = '';

}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    switch (operator) {
        case '+': previousValue += currentValue; break;
        case '-': previousValue -= currentValue; break;
        case '*': previousValue *= currentValue; break;
        case '/': previousValue /= currentValue; break;
        default: return;

    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal () {
    if(!currentValue.includes(".")) {
        currentValue += '.';
    }
}