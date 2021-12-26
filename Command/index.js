const Action = Object.freeze({
  deposit: "deposit",
  withdraw: "withdraw",
});

class Account {
  #balance;

  constructor() {
    this.#balance = 0;
  }

  process(command) {
    if (command.success) {
      command.success = false;
      return;
    }

    if (command.action === Action.deposit) this.#balance += command.amount;
    else this.#balance -= command.amount;

    command.success = true;
  }

  set balance(newBalance) {
    this.#balance += newBalance;
  }

  get balance() {
    return this.#balance;
  }
}

class Command {
  #success;

  constructor(action, amount) {
    this.action = action;
    this.amount = amount;
    this.#success = false;
  }

  set success(value) {
    this.#success = value;
  }

  get success() {
    return this.#success;
  }
}

module.exports = { Action, Account, Command };
