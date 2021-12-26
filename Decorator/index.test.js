const Dragon = require("./index");

describe("decorator", function () {
  it("should let dragon fly or crawl", function () {
    const dragon = new Dragon();

    expect(dragon.fly()).toEqual("flying");
    expect(dragon.crawl()).toEqual("too young");

    dragon.age = 20;

    expect(dragon.fly()).toEqual("too old");
    expect(dragon.crawl()).toEqual("crawling");
  });
});
