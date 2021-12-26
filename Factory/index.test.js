const PersonFactory = require("./index");

describe("factory", function () {
  it("exercise", function () {
    const pf = new PersonFactory();

    const p1 = pf.createPerson("Chris");
    expect(p1.name).toEqual("Chris");
    expect(p1.id).toEqual(0);

    const p2 = pf.createPerson("Sarah");
    expect(p2.id).toEqual(1);
  });
});
