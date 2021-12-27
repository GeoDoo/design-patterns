class Creature {
  constructor(attack, health) {
    this.attack = attack;
    this.health = health;
    this.isAlive = this.health > 0;
    this.id = Creature.count++;
  }
}
Creature.count = 0;

class Game {
  constructor(damageStrategy) {
    this.damageStrategy = damageStrategy;
  }

  springTrapOn(creature) {
    this.damageStrategy.damage(creature);

    return creature.isAlive;
  }
}

class DamageStrategy {
  damage(creature) {
    if (creature.health <= 0) {
      creature.isAlive = false;
    }
  }
}

class ConstantDamageStrategy extends DamageStrategy {
  damage(creature) {
    creature.health--;

    super.damage(creature);
  }
}

class GrowingDamageStrategy extends DamageStrategy {
  damage(creature) {
    if (GrowingDamageStrategy.impact[creature.id]) {
      const dmg = ++GrowingDamageStrategy.impact[creature.id];

      creature.health -= dmg;
    } else {
      creature.health--;

      GrowingDamageStrategy.impact[creature.id] = 1;
    }

    super.damage(creature);
  }
}
GrowingDamageStrategy.impact = {};

module.exports = {
  Game,
  Creature,
  ConstantDamageStrategy,
  GrowingDamageStrategy,
};
