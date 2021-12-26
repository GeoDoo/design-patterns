class ExpressionProcessor {
  constructor() {
    this.variables = {};
    this.nextOp = Object.freeze({
      nothing: 0,
      plus: 1,
      minus: 2,
    });
  }

  splitWithoutRegex(input) {
    const result = [];
    let buffer = [];

    for (let ch of input) {
      if (ch === "+" || ch === "-") {
        const final = `${buffer.join("")}${ch}`;

        result.push(final);
        buffer = [];
      } else {
        buffer.push(ch);
      }
    }

    if (buffer.length > 0) result.push(buffer.join(""));

    return result;
  }

  calculate(expression) {
    let current = 0;
    let nextOp = this.nextOp.nothing;

    const parts = this.splitWithoutRegex(expression);

    for (let part of parts) {
      const noop = part.split("+-");
      const first = noop[0];
      let value = 0,
        z = 0;

      z = parseInt(first);

      if (!isNaN(z)) value = z;
      else if (first.length === 1 && this.variables[first[0]] !== undefined) {
        value = this.variables[first[0]];
      } else return 0;

      switch (nextOp) {
        case this.nextOp.nothing:
          current = value;
          break;
        case this.nextOp.plus:
          current += value;
          break;
        case this.nextOp.minus:
          current -= value;
          break;
      }

      if (part.endsWith("+")) nextOp = this.nextOp.plus;
      else if (part.endsWith("-")) nextOp = this.nextOp.minus;
    }

    return current;
  }
}

module.exports = ExpressionProcessor;
