const CodeBuilder = require("./index");

describe("builder", function () {
  it("empty test", function () {
    const cb = new CodeBuilder("Foo");

    expect(cb.toString()).toBe("class Foo {\n}");
  });

  it("person test", function () {
    const cb = new CodeBuilder("Person");

    cb.addField("name").addField("age");

    expect(cb.toString()).toBe(
      "class Person {\n" +
        "  constructor(name, age) {\n" +
        "    this.name = name;\n" +
        "    this.age = age;\n" +
        "  }\n" +
        "}"
    );
  });
});
