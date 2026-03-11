let firstOperand = "";
let secondOperand = "";
let operator = "";

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
});

const equalKey = document.querySelector("#equal-key");
equalKey.addEventListener("click", () => {
  firstOperand = operate(+firstOperand, +secondOperand, operator).toFixed(2);
  secondOperand = "";
  operator = "";
  attDisplay();
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
      alert("Invalid operator");
      return NaN;
  }
}

function handleInput(input) {
  if (input === "/" || input === "+" || input === "-" || input === "*") {
    if (display.textContent === "") return;
    operator = input;
  } else if (operator) secondOperand += input;
  else firstOperand += input;

  attDisplay();
}

function attDisplay() {
  display.textContent = `${firstOperand}${operator}${secondOperand}`;
}
