const SingletonTester = require("./index");

describe("singleton", function () {
  it("test with a real singleton", function () {
    const item = [1, 2, 3];

    expect(SingletonTester.isSingleton(() => item)).toBe(true);
  });

  it("test with a non-singleton", function () {
    const result = SingletonTester.isSingleton(() => [Math.random()]);

    expect(result).toBe(false);
  });
});
