const {
  Game,
  Creature,
  ConstantDamageStrategy,
  GrowingDamageStrategy,
} = require("./index");

describe("strategy", function () {
  it("creature with ordinary strategy", function () {
    const cg = new Game(new ConstantDamageStrategy());
    const c = new Creature(1, 3);

    expect(c.health).toEqual(3);
    expect(c.isAlive).toEqual(true);
    cg.springTrapOn(c);
    expect(c.health).toEqual(2);
    expect(c.isAlive).toEqual(true);
    cg.springTrapOn(c);
    expect(c.health).toEqual(1);
    expect(c.isAlive).toEqual(true);
    cg.springTrapOn(c);
    expect(c.health).toEqual(0);
    expect(c.isAlive).toEqual(false);
  });

  it("creature with growing strategy", function () {
    const cg = new Game(new GrowingDamageStrategy());
    const c = new Creature(1, 3);

    expect(c.health).toEqual(3);
    expect(c.isAlive).toBe(true);

    cg.springTrapOn(c);
    expect(c.health).toEqual(2);
    expect(c.isAlive).toBe(true);

    cg.springTrapOn(c);
    expect(c.health).toEqual(0);
    expect(c.isAlive).toBe(false);
  });

  it("two creatures with their own deprecation", function () {
    console.log("two creatures are used here...");
    const cg = new Game(new GrowingDamageStrategy());
    const c1 = new Creature(1, 3);
    const c2 = new Creature(1, 3);

    console.log("springing a trap on both creatures");
    console.log("expecting each creature to be damaged by 1");
    cg.springTrapOn(c1);
    cg.springTrapOn(c2);

    expect(c1.health).toEqual(2);
    expect(c1.isAlive).toBe(true);
    expect(c2.health).toEqual(2);
    expect(c2.isAlive).toBe(true);

    cg.springTrapOn(c2);
    expect(c2.health).toEqual(0);
    expect(c2.isAlive).toBe(false);
  });
});
