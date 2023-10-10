// const timeout = setTimeout(() => {
//   console.log("after 5 seconds");
// }, 5000);

// clearTimeout(timeout);

// let count = 0;
// setInterval(() => {
//   console.log("bum-bam", ++count);
// }, 1000);

const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve([1, 2, 3]);
      reject("Error in delay");
    }, time);
  });

  return promise;
};

// delay(2500)
//   .then((data) => {
//     console.log("timeout", data);
//     return data.map((x) => x ** 2);
//   })
//   .then((data) => console.log("new data", data))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("finally"));

const getData = () => new Promise((resolve) => resolve([1, 2, 3]));

// getData().then((array) => console.log(array));

async function asyncExmple() {
  try {
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally");
  }
}

asyncExmple();
