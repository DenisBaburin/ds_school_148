const firstName = "Denis";
const age = "17";

// const old = `My name is ${name} and my age is ${age} and I ${
//   age > 18 ? "can drive" : "can't drive"
// }`;

// console.log(old);

//console.log(Math.random());

// getRandom = (min, max) => {
//   return +(Math.random() * (max - min + 1) + min).toFixed(2);
// };

// console.log(getRandom(10, 100));

// console.log(firstName.length);
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(firstName.charAt(2));
// console.log(firstName.indexOf("e"));
// console.log(firstName.toLowerCase().startsWith("den"));
// console.log(firstName.toLowerCase().endsWith("is"));
// console.log(firstName.repeat(5));

// const password = "     pppp    pp p";
// console.log(password.trim());

const isPrimeNumber = (num) => {
  if (num < 2) {
    return alert("Число меньше одного");
  } else if (num == 2 || num == 3) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      } else {
        continue;
      }
    }
  }

  return true;
};

//console.log(isPrimeNumber(111));

const func = (num, min, max) => {
  return num < min
    ? min ** 2
    : num > max
    ? max ** 2
    : num < max - (max - min) / 2
    ? num ** 2
    : Math.floor(num);
};

// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8

const isPerfectNumber = (number) => {
  let mults = [];
  for (let i = 1; i <= Math.ceil(number / 2); i++) {
    if (number % i == 0) {
      mults.push(i);
    } else {
      continue;
    }
  }
  return number == mults.reduce((acc, curr) => acc + curr, 0) ? true : false;
};

// console.log(isPerfectNumber(6)); // true
// console.log(isPerfectNumber(28)); // true
// console.log(isPerfectNumber(12)); // false
// console.log(isPerfectNumber(16)); // false

function getNumberDigit(number, digitPosition) {
  // Ваш код здесь...
}

// getNumberDigit(123, 0); // 1
// getNumberDigit(123, 1); // 2
// getNumberDigit(123, 2); // 3
// getNumberDigit(1, 2); // undefined

const car = {
  name: "Hendai Solaris",
  type: "sedan",
  maxSpeed: "320",
  color: "red",
};

const fillUpCars = (carData) => {
  return `<div>
        <h2>${carData.name}</h2>
        <span>${carData.type}</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>${carData.maxSpeed}</span>
    </div>
    <div>
        <span>Color:</span>
        <span>${carData.color}</span>
    </div>`;
};

//console.log(fillUpCars(car));

const countWords = (sentence) => {
  return sentence.split(" ").length;
};

// const sentence = "Hello, how are you?";
// console.log(countWords(sentence)); // 4

const fullName = "John Doe Baburin";

const getInitials = (fullName) =>
  fullName
    .split(" ")
    .map((word) => word[0] + ".")
    .join(" ");

//console.log(getInitials(fullName));

const generateGoogleString = (numO) => {
  const google = "Google";
  return Math.abs(numO) > 2
    ? google[0] + "o".repeat(numO) + google.slice(3)
    : google;
};

// console.log(generateGoogleString(4));
// // Goooogle

// console.log(generateGoogleString(0));
// // Google

// console.log(generateGoogleString(-2));

console.log(
  "Hello, Привет!"
    .split("")
    .map((i) => ("oeие".indexOf(i) != -1 ? i : null))
    .join("").length
);
