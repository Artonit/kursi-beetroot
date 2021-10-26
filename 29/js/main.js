var firstNumber = 10;

var secondNumber = firstNumber;

firstNumber = 20;

console.log("First Number:", firstNumber);
console.log("Second Number", secondNumber);

// var person1 = {
//   name: "Artonit",
//   gender: "Male",
//   age: 22,
// };

// var person2 = Object.assign({}, person1);

// person2.name = "Nesar";

// console.log("Person 1: ", person1);
// console.log("Person 2:", person2);

let person1 = {
  name: "Artonit",
  gender: "Male",
  age: 22,
};

const personKeyz = Object.keys(person1);

const personValuez = Object.values(person1);

console.log("person1:", person1);
console.log("personKeyz:", personKeyz);
console.log("personValuez:", personValuez);
