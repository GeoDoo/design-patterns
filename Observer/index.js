class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);

    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  fire(sender, args) {
    this.handlers.forEach(function (v) {
      v(sender, args);
    });
  }
}

class Game {
  constructor() {
    this.ratEnters = new Event();
    this.ratDies = new Event();
    this.notifyRat = new Event();
  }

  fireRatEnters(sender) {
    this.ratEnters.fire(sender);
  }

  fireRatDies(sender) {
    this.ratDies.fire(sender);
  }

  fireNotifyRat(sender, whichRat) {
    this.notifyRat.fire(sender, whichRat);
  }
}

class Rat {
  constructor(game) {
    this.game = game;
    this.attack = 1;

    game.ratEnters.subscribe(this.handleRatEnters.bind(this));
    game.ratDies.subscribe(this.handleRatDies.bind(this));
    game.notifyRat.subscribe(this.handleNotifyRat.bind(this));
    game.fireRatEnters(this);
  }

  handleRatEnters(sender) {
    if (sender !== this) {
      this.attack++;
      this.game.fireNotifyRat(this, sender);
    }
  }

  handleRatDies() {
    this.attack--;
  }

  handleNotifyRat(_sender, whichRat) {
    if (whichRat === this) this.attack++;
  }

  die() {
    this.game.fireRatDies(this);
  }
}

module.exports = { Game, Rat };
