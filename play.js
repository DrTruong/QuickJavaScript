var name = "Trường";
var age = 24;
var hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ("Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby);
}
console.log(summarizeUser(this.name, age, hasHobbies));

const add = (a, b) => a + b;
console.log("add", add(1, 2))

const addOne = a => a + 1;
console.log("addOne", addOne(4))

const addRandom = () => 3 + 4;
console.log("addRandom", addRandom())