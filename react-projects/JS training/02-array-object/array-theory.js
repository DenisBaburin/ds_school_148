let a = 3;
a += 1;

if (a % 2 === 0) {
  console.log("Четное");
} else {
  console.log("Нечетное");
}

for (let i = 0; i <= 1000; i++) {
  if (i % 2 != 0 || i % 12 == 0) {
    console.log(i);
  }
}

const array = [1, 10, 15, -100, -23, 19, 15032];
console.log(array);
const newArray = array.map((item) => item * 1.25);
console.log(newArray);

function sayHello(name) {
  return name ? console.log(`Hello, ${name}!`) : console.log("Hello, someone!");
}

sayHello();

sayHello("Denis");

function calc(a, b, operation) {
  return operation == "+"
    ? a + b
    : operation == "-"
    ? a - b
    : operation == "*"
    ? a * b
    : a / b;
}

console.log(calc(1, 2, "+")); // 3
console.log(calc(1, 2, "-")); // -1
console.log(calc(2, 2, "*")); // 4
console.log(calc(4, 2, "/")); // 2

const age = 11;
const category = age > 18 ? "Взрослый" : "Детский";
console.log(category);

const x = 12;
const b = 10;
const c = x > b ? x : b;
console.log(c);

const names = ["Владилен", "Елена", "Игорь", "Ксения"];
//names.push("Алена");
//names.unshift("Алена");
//const firstName = names.shift();
// const firstName = names.pop();
// console.log(names, firstName);

//console.log(names.reverse());
// console.log(names.toReversed());
// console.log(names);

// const letters = ["e", "c", "d", "b", "a"];
// console.log(
//   letters.sort(function (a, b) {
//     return b.charCodeAt(0) - a.charCodeAt(0);
//   })
// );
// console.log(letters);
// console.log(letters.toSorted());
// console.log(letters);
// console.log(names.splice(0, 2));
//console.log(names.toSpliced(0, 2));
//console.log(names);

// const greatWoman = "Елена";
// const index = names.indexOf(greatWoman);
// console.log(index);
// const newNames = names.with(index, "Елена Великая");
// // names[index] = "Елена Великая";
// // console.log(names);
// // console.log(newNames);

// // const capitalNames = names.map(function (name, index) {
// //   return name.toUpperCase();
// // });

// // console.log(capitalNames);
// console.log(names.includes("Игорь"));

const people = [
  { name: "Владилен", budget: 4200 },
  { name: "Елена", budget: 15100 },
  { name: "Игорь", budget: 300 },
  { name: "Ксения", budget: 7520 },
];

// let findedPerson;

// for (let person of people) {
//   if (person.budget === 7520) {
//     findedPerson = person;
//   }
// }

// const findedPerson = people.find(function (person) {
//   return person.budget === 7520;
//   // if (person.budget === 7520) {
//   //   return true;
//   // }
// });

//const findedPerson = people.find((person) => person.budget === 7520);
//console.log(findedPerson);

// const findedPerson = people.findIndex((person) => person.budget === 7520);
// console.log(findedPerson);
// console.log(people[findedPerson]);
// console.log(people.with(findedPerson, 42));

// let sumBudge = 0;
// const filtered = people.filter(function (person) {
//   return person.budget > 5000;
// });

// filtered.forEach(function (p) {
//   sumBudge += p.budget;
// });
// console.log(sumBudge);

// console.log(filtered);

// const sumBudget = people
//   .filter((p) => p.budget > 5000)
//   .map((p) => p.budget)
//   .reduce((acc, p) => acc + p, 0);

// console.log(sumBudget);

const string = "Привет, как дела?";
const reversed = string.split("").toReversed().join("");

console.log(reversed);

const john = { name: "Лжон", age: 31, pet: "собака" };
const ann = { name: "Анна", age: 23, pet: "хомячок" };
function infoAboutPerson(person) {
  console.log(
    `Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец ${person.pet}`
  );
}

infoAboutPerson(john);

function incrementAge(person) {
  person.age += 1;
  return person;
}

console.log(incrementAge(john));

for (item in john) {
  console.log(item + ": " + john[item]);
}

function sum(array) {
  // Ваш код здесь...
  return array.reduce((acc, p) => acc + p, 0);
}

const arr = [1, 50, 20, 75, 90];

console.log(sum(arr));

const names2 = ["Ann", "Boris", "Clen", "Denis", "Ean"];
console.log(names2);
names2.pop();
names2.shift();
console.log(names2);

const names3 = ["Bob", "Klar", "Petya", "Ilya", "Viktoriya"];

function makeList(arr) {
  return `<ul>
    <li>'${arr[0]}'</li>
    <li>'${arr[1]}'</li>
    <li>'${arr[2]}'</li>
    <li>'${arr[3]}'</li>
    <li>'${arr[4]}'</li>
</ul>`;
}

console.log(makeList(names3));

// const obj = {
//   age: 22,
//   favColor: "red",
//   height: 188,
//   pet: "dog",
//   money: 12300,
// };

// let { age: age2, favColor, height, pet, money } = obj;
// console.log(age2, favColor, height, pet, money);

const obj = {
  age: 22,
  favColor: "red",
  height: 188,
  pet: "dog",
  money: 12300,
};

const updateObj = {
  age: 23,
  favColor: "blue",
  money: 11450,
};

const obj2 = {
  age: 22,
  favColor: "red",
  height: 188,
  pet: "dog",
  money: 12300,
};

for (item in obj2) {
  if (item in updateObj) {
    obj2[item] = updateObj[item];
  }
}
console.log(obj2);
