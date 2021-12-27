class Mediator {
  constructor() {
    this.participants = [];
  }
}

class Participant {
  constructor(mediator) {
    this.mediator = mediator;
    this.value = 0;
    this.mediator.participants.push(this);
  }

  say(num) {
    this.mediator.participants.forEach((p) => {
      if (p !== this) {
        p.value = num;
      }
    });
  }
}

module.exports = { Mediator, Participant };
