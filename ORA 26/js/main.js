function findTheEnigma(number) {
  var enigma = 100;

  if (!number) {
    return "Shkruaj nje numer";
  }
  if (number < enigma / 2) {
    return "Vlera e enigmes eshte per te pakten dy her me e madhe";
  }
  if (number / 2 > enigma) {
    return "Vlera e enigmes eshte per te pakten dy her me e vogel";
  }

  return number == enigma
    ? "Vlera e enigmes eshte e sakt"
    : "Vlera e enigmes nuk eshte qelluar";
}
console.log(findTheEnigma(100));

function colorMessage(color) {
  if (!color) {
    return "Zgjedh nje ngjyre";
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
    return "Nuk ka ndonje mesazh per ngjyren";
  }
}

console.log(colorMessage("green"));

function colorMessageSwitch(color) {
  switch (color) {
    case "!color":
      console.log("Zgjedh nje ngjyre");
      break;
    case "red":
      console.log("red");
      break;
    case "blue":
      console.log("blue");
      break;
    case "yellow":
      console.log("yellow");
      break;
    case "green":
      console.log("green");
      break;
    default:
      alert("Nuk ka ndonje mesazh per ngjyren");
      break;
  }
}
console.log(colorMessageSwitch("yellow"));
