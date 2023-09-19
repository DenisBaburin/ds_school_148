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

// console.log(resultElement.textContent);
// resultElement.textContent = 42;

const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;
console.log(typeof sum);
