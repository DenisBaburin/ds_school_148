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
    console.log("greet person", this);
  },
  arrow: () => {
    console.log("Person Arrow", this);
  },
  info() {
    console.log(this);
    console.log("Person name: ", this.name);
  },
};

//console.log(person.address);
//person.arrow();
//const age = [1, 5, 87, 45, 8, 8];
//console.log(age.sort((a, b) => a - b).slice(-2));
// person.info();
// person.greet();
// person.arrow();

// const addressKey = "address";
// console.log(person[addressKey]);

// person.age++;
// person.languages.push("tr");

// console.log(person.age);
// console.log(person.languages);

// delete person.address;

// console.log(person);

// const { age, name: firstName = "Ivan", languages } = person;

// // console.log(age, firstName, languages);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key]);
//   }
// }

// Object.keys(person).forEach((key) => {
//   console.log(person[key]);
// });

const logger = {
  keys() {
    console.log("Object keys", Object.keys(this));
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log("Key:", key);
      console.log("Value:", this[key]);
    });
  },
};

//logger.keys.bind(person)();

// logger.keys.call(person);
// logger.keys.apply(person);

class Human {
  isHuman = true;
  humanGreet() {
    return "Hello from human";
  }
}

class Person extends Human {
  constructor(name, age) {
    super();
    this.name = name ?? "Undefined name";
    this.age = age ?? "Undefined age";
  }

  sayHello() {
    console.log("Hello, ", this.name);
  }
}

const person1 = new Person("Denis", 41);
const person2 = new Person("Denis2", 43);

// person1.sayHello();
// person2.sayHello();

console.log(person1.humanGreet());
