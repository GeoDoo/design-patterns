const MagicSquareGenerator = require("./index");

describe("facade", function () {
  it("should generate good magic squares", function () {
    const gen = new MagicSquareGenerator();
    const square = gen.generate(3);

    const adder = function (p, c) {
      return p + c;
    };

    const first = square[0].reduce(adder);

    for (const row of square) expect(row.reduce(adder)).toEqual(first);
  });
});
