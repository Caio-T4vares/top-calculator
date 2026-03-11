let firstOperand = "";
let secondOperand = "";
let operator = "";
let isResult = false;

const display = document.querySelector("#display");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    const keyValue = e.target.textContent;
    handleInput(keyValue);
  });
});

const clearKey = document.querySelector("#clear-key");
clearKey.addEventListener("click", () => {
  display.textContent = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
  isResult = false;
});

const equalKey = document.querySelector("#equal-key");
equalKey.addEventListener("click", () => {
  if (firstOperand !== "" && secondOperand !== "") {
    firstOperand = operate(+firstOperand, +secondOperand, operator);
    if (!Number.isInteger(firstOperand)) firstOperand = firstOperand.toFixed(2);
    secondOperand = "";
    operator = "";
    isResult = true;
    attDisplay();
  }
});

function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  if (secondOperand === 0) {
    alert("Divide by zero it's not suported!");
    return;
  }
  return firstOperand / secondOperand;
}
function operate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "-":
      return subtract(firstOperand, secondOperand);
    case "*":
      return multiply(firstOperand, secondOperand);
    case "/":
      return divide(firstOperand, secondOperand);
    default:
      alert("Invalid operation");
  }
}

function handleInput(input) {
  if (input === "/" || input === "+" || input === "-" || input === "*") {
    isResult = false;
    if (display.textContent === "") return;
    if (operator !== "" && firstOperand !== "" && secondOperand !== "") {
      firstOperand = operate(+firstOperand, +secondOperand, operator);
      if (!Number.isInteger(firstOperand))
        firstOperand = firstOperand.toFixed(2);
      secondOperand = "";
    }
    operator = input;
  } else if (operator) {
    if (isResult) {
      clearKey.dispatchEvent(new Event("click"));
    }
    secondOperand += input;
  } else {
    if (isResult) {
      clearKey.dispatchEvent(new Event("click"));
    }
    firstOperand += input;
  }

  attDisplay();
}

function attDisplay() {
  display.textContent = `${firstOperand}${operator}${secondOperand}`;
}
