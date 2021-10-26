// WHILE

function renderNumbersWhile(number) {
  var endNumber = 10;

  if (number == endNumber) {
    return "numer i sakt";
  }
  if (number <= 0) {
    return "Ju lutemi shenoni numerin me vlere pozitive!";
  }
  var i = 0;

  while (i < 10) {
    i++;
    console.log(i);
  }
}

renderNumbersWhile(1);
console.log("---------------------------------------------------------");

// DO-WHILE

function renderNumbersDoWhile(number) {
  var endNumber = 10;

  if (number == endNumber) {
    return "numer i sakt";
  } else if (number <= 0) {
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
  } else if (number <= 0) {
    return "Ju lutemi shenoni numerin me vlere pozitive!";
  }
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log(renderNumbersFor(-10));
console.log("---------------------------------------------------------");

// detyra e katert

function renderEvenNumbers(firstNumber, lastNumber) {
  if (firstNumber >= lastNumber) {
    return "Numeri i pare duhet te jete me i vogel se numri i dyte!";
  }
  for (var i = firstNumber; i <= lastNumber; i += 2) {
    console.log(i);
  }

  return "Numri i par eshte me i vogel se numri i dyt";
}

console.log(renderEvenNumbers(1, 30));
