class Square {
  constructor(a) {
    this.a = a;
  }
}

class SquareToRectangleAdapter {
  constructor(square) {
    this.a = square.a;
    this.b = square.a;
  }
}

const area = (adapter) => {
  return adapter.a * adapter.b;
};

module.exports = { Square, SquareToRectangleAdapter, area };
