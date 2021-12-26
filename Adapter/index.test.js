const { Square, SquareToRectangleAdapter, area } = require("./index");

describe("adapter", function () {
  it("should adapt things, duh!", function () {
    const sq = new Square(11);
    const adapter = new SquareToRectangleAdapter(sq);

    expect(area(adapter)).toEqual(121);
  });
});
