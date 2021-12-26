const WhatToQuery = Object.freeze({
  attack: 1,
  defence: 2,
});

class Query {
  constructor(whatToQuery, result) {
    this.whatToQuery = whatToQuery;
    this.result = result;
  }
}

class Goblin {
  constructor(game, baseAttack = 1, baseDefence = 1) {
    this.game = game;
    game.creatures.push(this);
    this.baseAttack = baseAttack;
    this.baseDefence = baseDefence;
  }

  handleQuery(source, query) {
    if (source === this) {
      switch (query.whatToQuery) {
        case WhatToQuery.attack:
          query.result += this.baseAttack;
          break;
        case WhatToQuery.defence:
          query.result += this.baseDefence;
          break;
      }
    } else if (query.whatToQuery === WhatToQuery.defence) {
      query.result++;
    }
  }

  get defence() {
    const q = new Query(WhatToQuery.defence, 0);
    for (let c of this.game.creatures) c.handleQuery(this, q);
    return q.result;
  }

  get attack() {
    const q = new Query(WhatToQuery.attack, 0);
    for (let c of this.game.creatures) c.handleQuery(this, q);
    return q.result;
  }
}

class GoblinKing extends Goblin {
  constructor(game) {
    super(game, 3, 3);
  }

  handleQuery(source, query) {
    if (source !== this && query.whatToQuery === WhatToQuery.attack) {
      query.result++;
    }
    super.handleQuery(source, query);
  }
}

class Game {
  constructor() {
    this.creatures = [];
  }
}

module.exports = { Goblin, GoblinKing, Game };
