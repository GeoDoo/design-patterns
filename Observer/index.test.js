const { Game, Rat } = require("./index");

describe("observer", function () {
  it("single rat test", function () {
    const game = new Game();
    const rat = new Rat(game);
    expect(rat.attack).toEqual(1);
  });

  it("two rat test", function () {
    const game = new Game();
    const rat = new Rat(game);
    const rat2 = new Rat(game);
    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);
  });

  it("three rats one dies", function () {
    const game = new Game();

    const rat = new Rat(game);
    expect(rat.attack).toEqual(1);

    const rat2 = new Rat(game);
    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);

    const rat3 = new Rat(game);
    expect(rat.attack).toEqual(3);
    expect(rat2.attack).toEqual(3);
    expect(rat3.attack).toEqual(3);
    rat3.die();

    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);
  });
});
