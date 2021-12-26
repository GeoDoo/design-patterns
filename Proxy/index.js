class Person {
  constructor(age = 0) {
    this.age = age;
  }

  drink() {
    return "drinking";
  }

  drive() {
    return "driving";
  }

  drinkAndDrive() {
    return "driving while drunk";
  }
}

class ResponsiblePerson {
  constructor(person) {
    this.person = person;
  }

  set age(num) {
    this.person.age = num;
  }

  drive() {
    if (this.person.age > 18) {
      return this.person.drive();
    }

    return "too young";
  }

  drink() {
    if (this.person.age > 16) {
      return this.person.drink();
    }

    return "too young";
  }

  drinkAndDrive() {
    return "dead";
  }
}

module.exports = { Person, ResponsiblePerson };
