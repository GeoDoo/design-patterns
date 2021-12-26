const { SingleValue, ManyValues, sum } = require("./index");

describe("composite", function () {
  it("should sum up different objects", function () {
    const singleValue = new SingleValue(11);
    const otherValues = new ManyValues();

    otherValues.push(22);
    otherValues.push(33);

    expect(sum([singleValue, otherValues])).toEqual(66);
  });
});
