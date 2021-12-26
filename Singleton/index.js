class SingletonTester {
  static isSingleton(fn) {
    const obj1 = fn();
    const obj2 = fn();

    return obj1 === obj2;
  }
}

module.exports = SingletonTester;
