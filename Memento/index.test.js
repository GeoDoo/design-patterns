const { TokenMachine, Token } = require("./index");

describe("memento", function () {
  it("single token test", function () {
    const tm = new TokenMachine();
    const m = tm.addTokenValue(123);
    tm.addTokenValue(456);
    tm.revert(m);

    expect(tm.tokens.length).toEqual(1);
    expect(tm.tokens[0].value).toEqual(123);
  });

  it("two token test", function () {
    const tm = new TokenMachine();
    tm.addTokenValue(1);
    const m = tm.addTokenValue(2);
    tm.addTokenValue(3);
    tm.revert(m);
    
    expect(tm.tokens.length).toEqual(2);
    expect(tm.tokens[0].value).toEqual(1);
    expect(tm.tokens[1].value).toEqual(2);
  });

  it("fiddle token test", function () {
    const tm = new TokenMachine();
    console.log("made a token with value 111 and kept a reference");
    const token = new Token(111);
    console.log("added this token to the list");
    tm.addToken(token);
    const m = tm.addTokenValue(222);
    console.log("changed this token's value to 333 :)");
    token.value = 333;
    tm.revert(m);

    expect(tm.tokens.length).toEqual(2);
    expect(tm.tokens[0].value).toEqual(111);
  });
});
