class SingleValue {
  constructor(value) {
    this.value = value;
  }
}

class ManyValues extends Array {}

const sum = (containers) => {
  return containers.reduce((a, b) => {
    if (b.length) {
      return a + b.reduce((x, y) => x + y);
    }

    if (b.value) {
      return a + b.value;
    }

    return a + b;
  }, 0);
};

module.exports = { SingleValue, ManyValues, sum };
