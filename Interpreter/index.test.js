const ExpressionProcessor = require("./index");

describe("interpreter", function () {
  it("calculate expressions with variables", function () {
    const ep = new ExpressionProcessor();
    ep.variables["x"] = 5;

    expect(ep.calculate("1")).toEqual(1);
    expect(ep.calculate("1+2")).toEqual(3);
    expect(ep.calculate("1+x")).toEqual(6);
    expect(ep.calculate("1+xy")).toEqual(0);
  });
});
