if (true) {
  var global = "global variable";

  function checkFunc2() {
    var global2 = "2";
    function checkFunc2() {
      var global3 = "3";

      console.log(global, global, global3);
    }
  }
}

const person = { firstName: "Artonit", gender: "Male", age: 20 };

console.log("his name is:" + person.firstName);

var car = {
  manufacturer: "Volkswagen",
  model: "Audi",
  yearofrelease: "2018",
  averagespeed: "220",
};
console.log(car);

// detyra e tret

// var clock = { hour: "04", minutes: "20", seconds: "20" };
// console.log(clock.getHours());

const birthday = new Date("October 21, 04:20:18");

console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
