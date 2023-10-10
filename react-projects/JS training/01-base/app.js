let num = 42;
let firstName = "Denis";
const isProgrammer = true;

// firstName = "Den";
// isProgrammer = false;

// alert(firstName);
// console.log("Test:", num, isProgrammer);

// console.log(num + 10);
// console.log(num - 10);
// console.log(num * 10);
// console.log(num / 10);
// console.log(num + 10 - 2);

// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// // console.log(num, num2);
// let num3 = num + (10 * 2) / 5 - 1;
// console.log(num3);

// const fullName = firstName + " Baburin";

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minustBtn = document.getElementById("minus");
const multBts = document.getElementById("multiply");
const divBts = document.getElementById("divide");
let action = "+";

// console.log(resultElement.textContent);
// resultElement.textContent = 42;

// console.log(typeof sum);\

plusBtn.onclick = function () {
  action = "+";
};

minustBtn.onclick = function () {
  action = "-";
};

multBts.onclick = function () {
  action = "*";
};

divBts.onclick = function () {
  action = "/";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  //   if (actionSymbol == "-") {
  //     return num1 - num2;
  //   } else if (actionSymbol == "+") {
  //     return num1 + num2;
  //   }
  return actionSymbol == "+"
    ? num1 + num2
    : actionSymbol == "-"
    ? num1 - num2
    : actionSymbol == "*"
    ? num1 * num2
    : num1 / num2;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
  //   if (action == "+") {
  //     const sum = Number(input1.value) + Number(input2.value);
  //     printResult(sum);
  //   } else if (action == "-") {
  //     const sum = Number(input1.value) - Number(input2.value);
  //     printResult(sum);
  //   }
};
