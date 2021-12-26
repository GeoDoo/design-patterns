const Sentence = require("./index");

describe("flyweight", function () {
  it("should let us capitalize words", function () {
    const s = new Sentence("alpha beta gamma");

    s.at(1).capitalize = true;

    expect(s.toString()).toEqual("alpha BETA gamma");
  });
});
