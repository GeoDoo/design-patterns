class SingleValue {
  constructor(value) {
    this.value = value;
  }
}

class ManyValues extends Array {}

const sum = (tuple) => {
  return tuple[0].value + tuple[1].reduce((a, b) => a + b);
};

module.exports = { SingleValue, ManyValues, sum };
