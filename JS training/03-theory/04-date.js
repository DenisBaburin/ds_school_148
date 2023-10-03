//console.log(new Date());

//const now = new Date();

// const start = new Date(1000 * 60 * 60 * 24 * 365);

// const date = new Date(2011, 0, 1, 12, 42, 12);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

// now.setFullYear(2240);

// console.log(now.getFullYear());

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

//const now = new Date();

let mode = "date";
const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

fullBtn.onclick = bindMode("full");
dateBtn.onclick = bindMode("date");
timeBtn.onclick = bindMode("time");

setInterval(update, 1000);
update();

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      now.toLocaleTimeString();
  }
}
