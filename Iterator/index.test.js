const Node = require("./index");

describe("iterator", function () {
  it("does preorder traversal", function () {
    const node = new Node(
      "a",
      new Node("b", new Node("c"), new Node("d")),
      new Node("e")
    );

    const values = [];

    for (const value of node.preorder()) values.push(value);

    expect(values.join("")).toEqual("abcde");
  });
});
