class Memento {
  constructor() {
    this.tokens = [];
  }
}

class Token {
  constructor(value = 0) {
    this.value = value;
  }
}

class TokenMachine {
  constructor() {
    this.tokens = [];
  }

  addTokenValue(value) {
    return this.addToken(new Token(value));
  }

  addToken(token) {
    const m = new Memento();

    this.tokens.push(token);
    m.tokens = this.tokens.map((t) => new Token(t.value));

    return m;
  }

  revert(m) {
    this.tokens = m.tokens.map((t) => new Token(t.value));
  }
}

module.exports = { TokenMachine, Token };
