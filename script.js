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
})
function handleNumber(num) {
    if(currentValue.length <= 5) {
    currentValue += num;
    }
}

function handleOperator(op) {
    operator += op;
    previousValue = currentValue;
    currentValue = '';
    
}

