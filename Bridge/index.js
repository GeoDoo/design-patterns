class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Square extends Shape {
  constructor(renderer) {
    super(renderer);
  }

  toString() {
    return `Drawing square as ${this.renderer.type}`;
  }
}

class Triangle extends Shape {
  constructor(renderer) {
    super(renderer);
  }

  toString() {
    return `Drawing triangle as ${this.renderer.type}`;
  }
}

class VectorRenderer {
  constructor() {
    this.type = "lines";
  }
}

class RasterRenderer {
  constructor() {
    this.type = "pixels";
  }
}

module.exports = { Square, Triangle, VectorRenderer, RasterRenderer };
