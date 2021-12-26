class Bird {
  constructor(age = 0) {
    this.age = age;
  }

  fly() {
    return this.age < 10 ? "flying" : "too old";
  }
}

class Lizard {
  constructor(age = 0) {
    this.age = age;
  }

  crawl() {
    return this.age > 1 ? "crawling" : "too young";
  }
}

/// Decorator that acts ad both a bird and a lizard

class Dragon {
  constructor(age) {
    this.age = age;
  }

  fly() {
    return new Bird(this.age).fly();
  }

  crawl() {
    return new Lizard(this.age).crawl();
  }
}

module.exports = Dragon;
