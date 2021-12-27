const {
  Creature,
  TemporaryCardDamageGame,
  PermanentCardDamageGame,
} = require("./index");

describe("template method", function () {
  it("impasse test", function () {
    const c1 = new Creature(1, 2);
    const c2 = new Creature(1, 2);
    const game = new TemporaryCardDamageGame([c1, c2]);

    expect(game.combat(0, 1)).toEqual(-1);
    expect(game.combat(0, 1)).toEqual(-1);
  });

  it("temporary murder test", function () {
    const c1 = new Creature(1, 1);
    const c2 = new Creature(2, 2);
    const game = new TemporaryCardDamageGame([c1, c2]);

    expect(game.combat(0, 1)).toEqual(1);
  });

  it("double murder test", function () {
    const c1 = new Creature(2, 2);
    const c2 = new Creature(2, 2);
    const game = new TemporaryCardDamageGame([c1, c2]);

    expect(game.combat(0, 1)).toEqual(-1);
  });

  it("permanent damage death test", function () {
    const c1 = new Creature(1, 2);
    const c2 = new Creature(1, 3);
    const game = new PermanentCardDamageGame([c1, c2]);
    expect(game.combat(0, 1)).toEqual(-1);
    expect(game.combat(0, 1)).toEqual(1);
  });
});
