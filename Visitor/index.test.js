const {
  AdditionExpression,
  ExpressionPrinter,
  MultiplicationExpression,
  Integer,
} = require("./index");

describe("visitor", function () {
  it("simple addition", function () {
    const simple = new AdditionExpression(new Integer(2), new Integer(3));
    const ep = new ExpressionPrinter();

    ep.visitAddition(simple);

    expect(ep.toString()).toEqual("(2+3)");
  });

  it("product of addition and value", function () {
    const expr = new MultiplicationExpression(
      new AdditionExpression(new Integer(2), new Integer(3)),
      new Integer(4)
    );
    const ep = new ExpressionPrinter();

    ep.visitMultiplication(expr);

    expect(ep.toString()).toEqual("(2+3)*4");
  });
});
