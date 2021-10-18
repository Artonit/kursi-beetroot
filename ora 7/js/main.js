// var firstName = "Artonit",
//   lastName = "Kameri";

// function numberCalculate(number1, number2) {
//   return number1 + number2;
// }

// console.log(numberCalculate(2, 3));
// console.log(numberCalculate(4, 5));
// console.log(numberCalculate(7, 8));

// var name = prompt("Please enter your name:");
// console.log("Hello " + name);

// function getWindowWidth() {
//   return "width:" + window.innerWidth;
// }

// console.log(getWindowWidth());

// const width =
//   window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.body.clientWidth;
// const height =
//   window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.body.clientHeight;

// console.log(width, height);

// alert("Hello" + name);

// var confirmValue = confirm("Are you sure you want to discard this action?");

// console.log(confirmValue);

// document.getElementById("demo").innerHTML = Math.round(4.4);

// console.log("demo");

// let x = 5;
// let y = 2;
// let z = x * y;
// console.log(z);

// let a = 30;
// console.log(a);

// let k = 5;
// let t = 5;
// let r = k * t;
// console.log(r);

// var q = 10;
// q += 5;

// console.log(q);

// let text1 = "Artonit";
// let text2 = "Kameri";
// let text3 = text1 + " " + text2;

// console.log(text3);

// let text4 = "ku tkom bre ";
// text4 += "qe sa stpasna pa";
// console.log(text4);

// let sqrt = Math.sqrt(9);
// document.write(sqrt);

// console.log(sqrt);

// document.getElementById("demo").innerHTML = Math.round(4.4);
// document.getElementById("demo").innerHTML = Math.pow(8, 2);
// document.getElementById("demo").innerHTML = Math.sqrt(64);
// document.getElementById("demo").innerHTML = Math.random();
// console.log(Math.round(4.4));
// console.log(Math.pow(8, 2));
// console.log(Math.sqrt(64));
// console.log(Math.random());
// var firstNumber = 10;

// if (firstNumber > 40) {
//   console.log("pass!");
// } else if (firstNumber > 5) {
//   console.log("second if passed!");
// } else {
//   console.log("canceled!");
// }

var number = 10;

switch (number) {
  case 5:
    console.log("numri5");
    break;
  case 10:
    console.log("numri10");
    break;
  case 20:
    console.log("numri20");
    break;
  case 30:
    console.log("numri30");
    break;
  default:
    alert("nuk bon");
    break;
}

function colorMessage(color) {
  if (!color) {
    return "Please provide a color";
  }
  if (color === "red") {
    return "Message for red color";
  } else if (color === "blue") {
    return "Message for blue color";
  } else if (color === "yellow") {
    return "Message for yellow color";
  } else if (color === "green") {
    return "Message for green color";
  } else {
    return "unknown message";
  }
}

console.log(colorMessage());
console.log(colorMessage("blue"));
console.log(colorMessage("yellow"));
