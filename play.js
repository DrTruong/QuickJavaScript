const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 2000);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return text;
    })
    .then((text2) => {
      console.log(text2);
    });
}, 3000);

console.log("Hello!");
console.log("Hi!");

const name = "Trường";
const age = 24;

console.log(`My name is ${this.name}, and i'm ${age} years old.`)