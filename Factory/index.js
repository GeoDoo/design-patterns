class Person {
  constructor(id, name) {
    this.name = name;
    this.id = id;
  }
}

class PersonFactory {
  constructor() {
    this.id = -1;
  }

  createPerson(name) {
    this.id++;
    return new Person(this.id, name);
  }
}

module.exports = PersonFactory;
