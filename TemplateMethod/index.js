class Creature {
  constructor(attack, health) {
    this.attack = attack;
    this.health = health;
  }
}

class CardGame {
  constructor(creatures) {
    this.creatures = creatures;
  }

  // returns index of winner if there's a winner
  // returns -1 if there's no winner (both alive or both dead)
  combat(creature1index, creature2index) {
    const first = this.creatures[creature1index];
    const second = this.creatures[creature2index];
    this.hit(first, second);
    this.hit(second, first);
    const firstAlive = first.health > 0;
    const secondAlive = second.health > 0;

    if (firstAlive === secondAlive) return -1;

    return firstAlive ? creature1index : creature2index;
  }

  hit(_attacker, _defender) {
    throw new Error("Please implement this in inheritors");
  }
}

class TemporaryCardDamageGame extends CardGame {
  constructor(creatures) {
    super(creatures);
  }

  hit(attacker, defender) {
    const oldHealth = defender.health;
    defender.health -= attacker.attack;
    if (defender.health > 0) defender.health = oldHealth;
  }
}

class PermanentCardDamageGame extends CardGame {
  constructor(creatures) {
    super(creatures);
  }

  hit(attacker, defender) {
    defender.health -= attacker.attack;
  }
}

module.exports = { Creature, TemporaryCardDamageGame, PermanentCardDamageGame };
