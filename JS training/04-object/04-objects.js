//console.log("test");

const sumNumbers = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15

// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60

const findMaxValue = (numbers) => {
  return numbers.length ? Math.max(...numbers) : undefined;
};

// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(Math.max(...numbers1)); // 5

// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined

const calculateAverage = (numbers) => {
  return numbers.length > 0
    ? numbers.reduce((acc, num) => acc + num, 0) / numbers.length
    : 0;
};

// const numbers1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(numbers1)); // 3

// const numbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers2)); // 30

// const emptyArray = [];
// console.log(calculateAverage(emptyArray)); // 0

const isPalindrome = (word) => {
  return word == word.split("").reverse().join("");
};

// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("radar")); // true
// console.log(isPalindrome("hello")); // false

const person = {
  name: "Denis",
  age: 41,
  isYoutuber: false,
  languages: ["ru", "en"],
  address: {
    city: "Yuzhno-Sakhalinsk",
    street: "Lenina",
  },
  "comlex key": "complex value",
  [new Date().getTime()]: "computed value",
  greet() {
    console.log("greet person");
  },
  arrow: () => {
    console.log("Person Arrow");
  },
};

console.log(person.address);
//person.arrow();
