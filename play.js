// var name = "Trường";
// var age = 24;
// var hasHobbies = true;

// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return ("Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby);
// }
// console.log(summarizeUser(this.name, age, hasHobbies));

// const add = (a, b) => a + b;
// console.log("add", add(1, 2))

// const addOne = a => a + 1;
// console.log("addOne", addOne(4))

// const addRandom = () => 3 + 4;
// console.log("addRandom", addRandom())

const person = {
    name: "Trường",
    age: 24,
    greet() {
        console.log("Hi, I'm " + this.name);
    }
};

const printName = ({ name, age }) => console.log(name, age);
printName(person); // Trường 24

const { name, age } = person;
console.log("Destructuring =>", name, age); // Destructuring => Trường 24

// person.greet(); // Hi, I'm Trường

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // Sports Cooking
// hobbies.forEach(hobby => console.log(hobby))

// console.log(hobbies.map(hobby => "Hobby: " + hobby));

// const coppiedPerson = {...person};
// console.log(coppiedPerson);

// const coppiedHobbies = [...hobbies];
// console.log(coppiedHobbies);

// const toArray = (...args) => args;
// console.log(toArray(1, 2, 3, 4));