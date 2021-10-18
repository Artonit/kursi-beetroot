// WHILE

function renderNumbersWhile(number) {
  var endNumber = 10;

  if (number == endNumber) {
    return "numer i sakt";
  }
  if (number <= 0) {
    return "Ju lutemi shenoni numerin me vlere pozitive!";
  }
}
var i = 0;

while (i < 10) {
  i++;
  console.log(i);
}

console.log(renderNumbersWhile(-2));
console.log("---------------------------------------------------------");

// DO-WHILE

function renderNumbersDoWhile(number) {
  var endNumber = 10;

  if (number == endNumber) {
    return "numer i sakt";
  }
  if (number <= 0) {
    return "Ju lutemi shenoni numerin me vlere pozitive!";
  }
}
var i = 0;

do {
  i++;
  console.log(i);
} while (i < 10);

console.log(renderNumbersDoWhile(10));
console.log("---------------------------------------------------------");

// FOR

function renderNumbersFor(number) {
  var endNumber = 10;

  if (number == endNumber) {
    return "numer i sakt";
  }
  if (number <= 0) {
    return "Ju lutemi shenoni numerin me vlere pozitive!";
  }
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log(renderNumbersFor(-10));
console.log("---------------------------------------------------------");

// detyra e katert

function renderEvenNumbers(number) {
  var firstNumber = 10;
  var endNumber = 20;

  if (firstNumber <= endNumber) {
    return "Numeri i pare duhet te jete me i vogel se numri i dyte!";
  } else {
    return "Numri i par eshte me i vogel se numri i dyt";
  }
}
for (var i = 10; i <= 20; i += 2) {
  console.log(i);
}
console.log(renderEvenNumbers(30));
