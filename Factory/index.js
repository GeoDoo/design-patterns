class Person {
  constructor(id, name) {
    this.name = name;
    this.id = id;
  }
}

class PersonFactory {
  static id = 0;

  createPerson(name) {
    return new Person(PersonFactory.id++, name);
  }
}

module.exports = PersonFactory;
