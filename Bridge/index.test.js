const { Square, Triangle, VectorRenderer, RasterRenderer } = require("./index");

describe("bridge", function () {
  it("render vector square", function () {
    const sq = new Square(new VectorRenderer());

    expect(sq.toString()).toEqual("Drawing square as lines");
  });

  it("render raster square", function () {
    const sq = new Square(new RasterRenderer());

    expect(sq.toString()).toEqual("Drawing square as pixels");
  });

  it("render vector triangle", function () {
    const sq = new Triangle(new VectorRenderer());

    expect(sq.toString()).toEqual("Drawing triangle as lines");
  });

  it("render raster triangle", function () {
    const sq = new Triangle(new RasterRenderer());

    expect(sq.toString()).toEqual("Drawing triangle as pixels");
  });
});
