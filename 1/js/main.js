var products = [
  {
    product: "Xhinse Skinny Fit",
    price: "72.00 €",
    sizes: ["27", "28", "29", "30"],
    gender: "Female",
  },
  {
    product: "Këmishë me mëngë të gjata",
    price: "40.00 €",
    sizes: ["S", "M", "L"],
    gender: "Female",
  },
  {
    product: "Xhaketë poliesteri",
    price: "200.00 €",
    sizes: ["L", "XL", "XXL"],
    gender: "Male",
  },
  {
    product: "T bluzë me logo Timberland",
    price: "20.00 €",
    sizes: ["S", "M", "L", "XXL"],
    gender: "Female",
  },
  {
    product: "T Bluzë me jakë polo",
    price: "20.00 €",
    sizes: ["S", "M", "L", "XL", "XXL"],
    gender: "Male",
  },
  {
    product: "T bluzë me logo Guess",
    price: "70.00 €",
    sizes: ["S", "M", "L"],
    gender: "Female",
  },
  {
    product: "Xhaketë Bomber",
    price: "120.00 €",
    sizes: ["M", "L", "XL", "XXL"],
    gender: "Male",
  },
  {
    product: "Streçe pambuku",
    price: "50.00 €",
    sizes: ["S", "M"],
    gender: "Female",
  },
  {
    product: "Xhaketë Jahrrod",
    price: "100.00 €",
    sizes: ["S", "M", "L", "XL"],
    gender: "Male",
  },
  {
    product: "Xhinse Slim Fit",
    price: "60.00 €",
    sizes: ["S", "M", "L"],
    gender: "Female",
  },

  {
    product: "Xhaketë rezistente ndaj ujit",
    price: "40.00 €",
    sizes: ["S", "L", "XXL"],
    gender: "Female",
  },
];

function filterProducts() {
  return {
    male: products.filter((item) => item.gender === "Male"),
    female: products.filter((item) => item.gender === "Female"),
  };
}

var filteredProducts = filterProducts();

console.log("Produktet per meshkuj: ", filteredProducts.male);
console.log("Produktet per femra: ", filteredProducts.female);

var games = ["CSGO", "Valorant", "GTA", "PUBG", "Fortnite"];

games.pop();
games.push("cs-go game");
games.unshift("GTA-V");

console.log(games);

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every((currentValue) => currentValue < 40));
