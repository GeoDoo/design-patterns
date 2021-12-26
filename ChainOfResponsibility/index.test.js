const { Goblin, GoblinKing, Game } = require("./index");

describe("chain of responsibility", function () {
  it("should handle many goblins", function () {
    const game = new Game();
    const goblin = new Goblin(game);

    expect(goblin.attack).toEqual(1);
    expect(goblin.defence).toEqual(1);

    const goblin2 = new Goblin(game);

    expect(goblin.attack).toEqual(1);
    expect(goblin.defence).toEqual(2);

    expect(goblin2.attack).toEqual(1);
    expect(goblin2.defence).toEqual(2);

    const goblin3 = new GoblinKing(game);

    expect(goblin3.attack).toEqual(3);
    expect(goblin3.defence).toEqual(5);

    expect(goblin.attack).toEqual(2);
    expect(goblin.defence).toEqual(3);

    expect(goblin2.attack).toEqual(2);
    expect(goblin2.defence).toEqual(3);
  });
});
