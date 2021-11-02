class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}

var person1 = new Person("Artonit", 20);

console.log(person1);

class Studenti {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  getStudentInformation() {
    return this.name + " ka id " + this.id;
  }

  getStudentName() {
    return this.name;
  }
  getStudentId() {
    return " id e studentit eshte " + this.id;
  }
}

var student1 = new Studenti("Enes Dodaj", 12345678);

console.log(student1.getStudentName());
console.log(student1.getStudentId());
console.log(student1.getStudentInformation());
