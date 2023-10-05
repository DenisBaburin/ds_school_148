// let car = {
//   model: "volga",
//   year: 2023,
// };

// const json = JSON.stringify(car);
// const parsed = JSON.parse(json);

// console.log(json, parsed);
const list = document.querySelector("#list");
const filter = document.querySelector("#filter");
let USERS = [];

async function start() {
  list.innerHTML = "Loading data from server...";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setTimeout(() => {
      USERS = data;
      render(USERS);
    }, 2000);
  } catch (err) {
    list.style.color = "red";
    list.innerHTML = err.message;
  }
}

filter.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(value)
  );
  render(filteredUsers);
});

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "No users found";
  } else {
    const html = users.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function toHTML(user) {
  return `<li class="list-group-item">${user.name}</li>`;
}

start();

function removeDuplicates(array = []) {
  let result = [];

  for (num of array) {
    if (result.indexOf(num) == -1) {
      result.push(num);
    }
  }

  return result;
}

// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers1)); // [1, 2, 3, 4, 5]

// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(numbers2)); // [10, 20, 30, 40, 50]

// const emptyArray = [];
// console.log(removeDuplicates(emptyArray)); // []

function createCounter(value) {
  return {
    inc() {
      return value++;
    },
    dec() {
      return value--;
    },
    get() {
      return value;
    },
  };
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7
